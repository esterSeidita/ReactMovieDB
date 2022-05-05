import { useEffect, useState } from "react";
import { GetData, wordToUpper } from "../../utils";
import "./style.scss";

export default function Categories({ setCategoriesFilter }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  // const [selected, setSelected] = useState("not-Selected")

  const handleChange = (e) => {
    const val = e.target.id;

    e.target.classList.toggle("selected");

    if (selectedCategories.indexOf(val) === -1) {
      setSelectedCategories((values) => [...values, val]);
    } else {
      const index = selectedCategories.indexOf(val);
      selectedCategories.splice(index, 1);
      setSelectedCategories(selectedCategories);
    }
  };

  const getCategories = (data) => {
    let catArray = [];
    data.forEach((el) => {
      for (const genre of el.genres) {
        if (catArray.indexOf(genre) === -1) catArray.push(genre);
      }
    });
    setCategories(catArray);
  };

  useEffect(() => {
    GetData().then((data) => getCategories(data));
  }, []);

  useEffect(() => {
    //eslint-disable-next-line;
    setCategoriesFilter(selectedCategories);
  }, [selectedCategories]);

  return (
    <div className="Categories">
      <h3>Filtra per categoria:</h3>
      {categories.map((cat, index) => (
        <div key={index} onClick={handleChange} value={cat} id={cat}>
          {wordToUpper(cat)}
        </div>
      ))}
    </div>
  );
}
