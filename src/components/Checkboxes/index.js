import { useEffect, useState } from "react";
import {GetData, wordToUpper} from "../../utils";
import styles from "./style.module.scss";

export default function Checkboxes({setRender, setCategoriesFilter}) {

  const [inputs, setInputs] = useState([])
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    const val= e.target.value;

    if(e.target.checked){
      setInputs((values) => ([...values, val])) 
      setRender(true)

    }else{
      const index = inputs.indexOf(val)
      const newVal= inputs.splice(index, 1);
      setInputs(inputs)
      setRender(true)

    }
    setRender(true)

  }

  const getCategories = (data) => {
    let catArray = [];
    data.forEach((el) => {for (const genre of el.genres) {
      if(catArray.indexOf(genre)===-1) catArray.push(genre)
    }})
    setCategories(catArray)
  }

  useEffect(() => {
    GetData().then((data)=>getCategories(data))
  }, [])

  useEffect(() => {
    setCategoriesFilter(inputs)
  }, [inputs])

  return (
    <div className={styles.Checkboxes}>
      <h3>Filtra per categoria:</h3>
      {categories.map((cat, index) => 
        <div key={index} className={styles.Checkboxes__group}>
        <input onClick={handleChange} type="checkbox" value={cat} id={cat} />
        <label htmlFor={cat}>{wordToUpper(cat)}</label>
      </div>
      )}
    </div>
  )
}
