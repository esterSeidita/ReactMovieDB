import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function Checkboxes({setCategoriesFilter}) {
  

  const [inputs, setInputs] = useState([])

  const handleChange = (e) => {
    const val= e.target.value;

    if(e.target.checked){
      setInputs((values) => ([...values, val])) 
    }else{
      const index = inputs.indexOf(val)
      // console.log("val", inputs);
      const newVal= inputs.splice(index, 1);
      setInputs(inputs)
    }

  }

  useEffect(() => {
    setCategoriesFilter(inputs)
    console.log(inputs)

  }, [inputs])

  return (
    <div className={styles.Checkboxes}>
      <h3>Filtra per categoria:</h3>
      <div className={styles.Checkboxes__group}>
        <input onClick={handleChange} type="checkbox" value="avventura" id="avventura" />
        <label htmlFor="avventura">Avventura</label>
      </div>

      <div className={styles.Checkboxes__group}>
        <input onClick={handleChange} type="checkbox" value="azione" id="azione" />
        <label htmlFor="azione">Azione</label>
      </div>

      <div className={styles.Checkboxes__group}>
        <input onClick={handleChange} type="checkbox" value="sci-fi" id="sci-fi" />
        <label htmlFor="sci-fi">Sci-Fi</label>
      </div>
    </div>
  )
}
