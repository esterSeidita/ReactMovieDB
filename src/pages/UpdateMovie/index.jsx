import styles from "./style.module.scss";
import { UpdateData } from "../../utils";
import { useEffect, useState } from "react";

export default function UpdateMovie({updateCardId, setCurrentPage}) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if(name==="genres")value=value.split(",");
    setInputs(values => ({...values, [name]: value}))

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateData(updateCardId, inputs).then(() => window.location.reload(false));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Titolo
      </label>
      <input 
        required
        type="text" 
        name="title" 
        value={inputs.title || ""} 
        onChange={handleChange}
      />
      <label>Anno
        </label>
        <input 
          required
          type="number" 
          name="year" 
          value={inputs.year || ""} 
          onChange={handleChange}
        />

      <label>Descrizione
        </label>
        <input 
          required
          type="text" 
          name="description" 
          value={inputs.description || ""} 
          onChange={handleChange}
        />

      <label>Poster
        </label>
        <input 
          required
          type="text" 
          name="poster" 
          value={inputs.poster || ""} 
          onChange={handleChange}
        />

      <label>Generi
        </label>
        <input 
          required
          type="text" 
          name="genres" 
          value={inputs.genres || ""} 
          onChange={handleChange}
        />

        <input type="submit" />
    </form>
  );
}
