import Card from "../Card";
import styles from "./style.module.scss";
import { GetData } from "./../../utils";
import { useEffect, useState } from "react";

export default function CardList({ filter, setUpdateCardId }) {
  const [movies, setMovies] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);

  useEffect(() => {
    GetData().then((result) => {
      setMovies(result);
      setMoviesFiltered(result);
    });
  }, []);

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

  return (
    <div className={styles.CardList}>
      {moviesFiltered.map((movie, index) => (
        <Card
          setUpdateCardId={setUpdateCardId}
          key={index}
          cardID={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}
