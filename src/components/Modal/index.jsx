import { useEffect, useState } from "react";
import "./style.scss";

export default function Modal({
  setDeleteConfirmed,
  showModal,
  title,
  description,
  needConfirm,
  setRender,
}) {
  const [visibility, setVisibility] = useState("not-visible");

  useEffect(() => {
    setVisibility(showModal);
  }, [showModal]);

  return (
    <div id={visibility} className="ModalWrapper">
      <div className="overlay"></div>
      <div className="modal">
        <h1>{title}</h1>
        <p>{description}</p>
        {needConfirm && (
          <div>
            <button
              onClick={() => setDeleteConfirmed(true)}
              className="confirm"
            >
              Conferma
            </button>
            <button
              onClick={() => {
                window.location.reload(false)
              }}
              className="abort"
            >
              Annulla
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
