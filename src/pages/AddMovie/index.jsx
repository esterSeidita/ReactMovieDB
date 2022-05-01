import styles from "./style.module.scss";
import { NewData } from "../../utils";
import { useState } from "react";
import Modal from "../../components/Modal";
import Card from "../../components/Card";
import {useNavigate  } from "react-router-dom";


export default function AddMovie() {
  const [inputs, setInputs] = useState({});
  const [showModal, setShowModal] = useState("not-visible");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "genres") value = value.split(",").map((el)=>el.trim());
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal("visible");
    NewData(inputs).then(() =>     setTimeout(() => {
      setShowModal("not-visible"); 
      navigate("/");
  }, 3000)
  )

  };

  return (
    <div className={styles.AddMovie}>
        <Modal showModal={showModal} title="Yeeee!" description="Film aggiunto con successo :D" needConfirm={false}/>
            <Card
          setUpdateCardId={false}
          key={false}
          cardID={false}
          movie={inputs}
          setModal={false}
          needActions={false}
        />     
    <form onSubmit={handleSubmit}>
      <label>Titolo</label>
      <input
        type="text"
        name="title"
        value={inputs.title || ""}
        onChange={handleChange}
      />
      <label>Anno</label>
      <input
        type="number"
        name="year"
        value={inputs.year || ""}
        onChange={handleChange}
      />

      <label>Descrizione</label>
      <input
        type="text"
        name="description"
        value={inputs.description || ""}
        onChange={handleChange}
      />

      <label>Poster</label>
      <input
        type="text"
        name="poster"
        value={inputs.poster || ""}
        onChange={handleChange}
      />

      <label>Generi</label>
      <input
        type="text"
        name="genres"
        value={inputs.genres || ""}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
    </div>
  );
}
