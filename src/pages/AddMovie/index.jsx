import styles from "./style.module.scss";
import { useState } from "react";
import Modal from "../../components/Modal";
import Card from "../../components/Card";
import Form from "../../components/Form";

export default function AddMovie({setAlertData}) {
  const [showModal, setShowModal] = useState("not-visible");
  const [inputs, setInputs] = useState({});

  return (
    <div className={styles.AddMovie}>
      <Modal
        showModal={showModal}
        title="Yeeee!"
        description="Film aggiunto con successo :D"
        needConfirm={false}
      />
      <Card
        setUpdateCardId={false}
        key={false}
        cardID={false}
        movie={inputs}
        setModal={false}
        needActions={false}
      />
      <Form
        setShowModal={setShowModal}
        method="POST"
        inputs={inputs}
        setInputs={setInputs}
        cardID = {false}
        setAlertData={setAlertData} 
      />
    </div>
  );
}
