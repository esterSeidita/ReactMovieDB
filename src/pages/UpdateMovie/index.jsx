import styles from "./style.module.scss";
import { GetData } from "../../utils";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Form from "../../components/Form";

export default function UpdateMovie({ setAlertData, updateCardId }) {
  const [inputs, setInputs] = useState({});
  const [cardData, setCardData] = useState([]);
  // const [showModal, setShowModal] = useState("not-visible");
  
  useEffect(() => {
    
    GetData(updateCardId).then((data) => {
      setCardData(data);
      setInputs(data);
    });
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        // setShowModal={setShowModal}
        method="UPDATE"
        inputs={inputs}
        setInputs={setInputs}
        setAlertData={setAlertData}
      />
    </div>
  );
}
