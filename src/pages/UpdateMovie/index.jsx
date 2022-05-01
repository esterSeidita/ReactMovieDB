import styles from "./style.module.scss";
import { GetData, UpdateData } from "../../utils";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import {useNavigate  } from "react-router-dom";

export default function UpdateMovie({ updateCardId }) {
  const [inputs, setInputs] = useState({});
  const [cardData, setCardData] = useState([]);
  const [redirect, setRedirect] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    GetData(updateCardId).then((data)=>
  {  
    setCardData(data)
    setInputs(data)
    }
    )
  }, [])

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "genres") value = value.split(",").map((el)=>el.trim());
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateData(updateCardId, inputs).then(() => navigate("/"))
  };


  return (
    <div className={styles.UpdateMovie}>
            <Card
          setUpdateCardId={false}
          key={cardData.id}
          cardID={cardData.id}
          movie={inputs}
          setModal={false}
          needActions={false}
        /> 
    <form onSubmit={handleSubmit}>
      <label>Titolo</label>
      <input
        required
        type="text"
        name="title"
        value={inputs.title || ""}
        onChange={handleChange}
      />
      <label>Anno</label>
      <input
        required
        type="number"
        name="year"
        value={inputs.year || ""}
        onChange={handleChange}
      />

      <label>Descrizione</label>
      <input
        required
        type="text"
        name="description"
        value={inputs.description || ""}
        onChange={handleChange}
      />

      <label>Poster</label>
      <input
        required
        type="text"
        name="poster"
        value={inputs.poster || ""}
        onChange={handleChange}
      />

      <label>Generi</label>
      <input
        required
        type="text"
        name="genres"
        value={ inputs.genres && Array.isArray(inputs.genres) ? inputs.genres.join(","):inputs.genres|| ""}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
    </div>
  );
}
