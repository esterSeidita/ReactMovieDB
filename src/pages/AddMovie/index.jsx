import "./style.css";
import { NewData } from "../../utils";
import { useState } from "react";
import Modal from "../../components/Modal";

export default function AddMovie() {
  const [inputs, setInputs] = useState({});
  const [showModal, setShowModal] = useState("not-visible");

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if(name==="genres") value = value.split(",");
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal("visible");
    NewData(inputs);
    setTimeout(() => {
      setShowModal("not-visible"); 
      window.location.href = '/';
  }, 3000);
  };

  return (
    <>
    <Modal showModal={showModal}/>
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
    </>
  );
}
