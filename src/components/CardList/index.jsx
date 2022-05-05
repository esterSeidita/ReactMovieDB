import Card from "../Card";
import styles from "./style.module.scss";
import { GetData } from "./../../utils";
import { useEffect, useState } from "react";

export default function CardList({
  setModalInfo,
  categoriesFilter,
  filter,
  setUpdateCardId,
  render
}) {
  const [movies, setMovies] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [modal, setModal] = useState({});

  useEffect(() => {
    GetData().then((result) => {
      setMovies(result);
      setMoviesFiltered(result);
    });
  }, [render, categoriesFilter]);

  useEffect(() => {
    setModalInfo(modal);
  }, [modal, setModalInfo]);

  useEffect(() => {
    const filtered = movies.filter(
      (movie) =>
        (movie.title &&
          movie.title.toLowerCase().includes(filter.toLowerCase())) ||
        (movie.genres &&
          Array.isArray(movie.genres) &&
          movie.genres.join("").toLowerCase().includes(filter.toLowerCase()))
    );
    setMoviesFiltered(filtered);
 // eslint-disable-next-line
  }, [filter]);

  return (
    <div className={styles.CardList}>
      {moviesFiltered.map((movie, index) =>
        categoriesFilter.length === 0 ? (
          <Card
            setUpdateCardId={setUpdateCardId}
            key={index}
            cardID={movie.id}
            movie={movie}
            setModal={setModal}
            needActions={true}
          />
        ) : (
          movie.genres.some((genre) => categoriesFilter.includes(genre)) && (
            <Card
              setUpdateCardId={setUpdateCardId}
              key={index}
              cardID={movie.id}
              movie={movie}
              setModal={setModal}
              needActions={true}
            />
          )
        )
      )}
    </div>
  );
}
