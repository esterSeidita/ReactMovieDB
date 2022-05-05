import { NewData, UpdateData } from "../../utils";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

export default function Form({
  // setShowModal,
  inputs,
  setInputs,
  method,
  setAlertData
}) {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "genres") value = value.split(",").map((el) => el.trim());
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setShowModal("visible");

    if (method === "POST"){
      setAlertData({content:"Film aggiunto con successo", response:"CREATE", display:true})

      NewData(inputs).then(() => {
        setTimeout(() => {
          // setShowModal("not-visible");
          navigate("/");
        }, 1000);
        setTimeout(()=>{  
          setAlertData({content:"", response:"", display:false})
      }, 5000);
      }
      );
    }
     
    if(method === "UPDATE"){
      setAlertData({content:"Film aggiornato con successo", response:"UPDATE", display:true})

      UpdateData(inputs.id, inputs).then(() =>{   
        navigate("/")      
        setTimeout(()=>{  
        setAlertData({content:"", response:"", display:false})
    }, 5000);});
    }
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
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

      <label>Genere (Tag)</label>
      <input
        type="text"
        name="genres"
        value={inputs.genres || ""}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  );
}
