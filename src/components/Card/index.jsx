import styles from "./style.module.scss";
import { DeleteData } from "../../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Card({
  setModal,
  movie,
  cardID,
  setUpdateCardId,
  needActions
}) {
  const updateCard = () => {
    setUpdateCardId(cardID);
  };

  const deleteAction = () => {
    setModal({
      show: "visible",
      title: "Sicuro di volere eliminare?",
      description: "",
      needConfirm: true,
      cardId: cardID,
    });
  };

  return (
    <div className={styles.Card}>
      <img
        src={movie.poster && movie.poster}
        alt={movie.title && movie.title}
      />
      <div className={styles.mainCard}>
        <h2>{movie.title && movie.title}</h2>
        <p>{movie.year && movie.year}</p>
        <p>{movie.description && movie.description}</p>
        <ul>
          {movie && Array.isArray(movie.genres) ? (
            movie.genres.map((genre, index) => <li key={index}>{genre}</li>)
          ) : (
            <li>{movie.genres}</li>
          )}
        </ul>
        {needActions && (
          <>
            <button onClick={deleteAction}>Delete</button>
            <Link to={"UpdateMovie"}>
              <button onClick={() => updateCard()}>Update</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
