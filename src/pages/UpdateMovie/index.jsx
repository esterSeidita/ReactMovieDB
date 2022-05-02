import styles from "./style.module.scss";
import { GetData, UpdateData } from "../../utils";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Form from "../../components/Form";
import {useNavigate  } from "react-router-dom";

export default function UpdateMovie({ updateCardId }) {
  const [inputs, setInputs] = useState({});
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GetData(updateCardId).then((data)=>
  {  
    setCardData(data)
    setInputs(data)
    }
    )
  }, [])

 

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
      <Form
        setShowModal={false}
        method="UPDATE"
        inputs={inputs}
        setInputs={setInputs}
      />
    </div>
  );
}
