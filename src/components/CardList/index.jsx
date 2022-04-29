import Card from "../Card";
import styles from "./style.module.scss";
import { GetData } from "./../../utils";
import { useEffect, useState } from "react";

export default function CardList({ setModalInfo, categoriesFilter, filter, setUpdateCardId }) {
  const [movies, setMovies] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [modal, setModal] = useState({})

  useEffect(() => {
    GetData().then((result) => {
      setMovies(result);
      setMoviesFiltered(result);
    });
  }, []);

  useEffect(() => {
    setModalInfo(modal)
  }, [modal]);

  useEffect(() => {
    const filtered = movies
      .filter(
        (movie) =>
          movie.title &&
          movie.title.toLowerCase().includes(filter.toLowerCase())
          ||
          movie.genres &&
          Array.isArray(movie.genres) &&
          movie.genres.join("").toLowerCase().includes(filter.toLowerCase())
      )
    setMoviesFiltered(filtered);

  }, [filter]);

  useEffect(() => {
    const filtered = movies
      .filter(
        (movie) =>
          movie.genres &&
          // movie.genres.join("").toLowerCase().includes(categoriesFilter.join().toLowerCase())
            // [...movie.genres].includes([...categoriesFilter])
            movie.genres.join("").toLowerCase().includes([...categoriesFilter])

          )

    setMoviesFiltered(filtered);

  }, [categoriesFilter]);

  return (
    <div className={styles.CardList}>
      {moviesFiltered.map((movie, index) => (
        <Card
          setUpdateCardId={setUpdateCardId}
          key={index}
          cardID={movie.id}
          movie={movie}
          setModal={setModal}
        />
      ))}
    </div>
  );
}
