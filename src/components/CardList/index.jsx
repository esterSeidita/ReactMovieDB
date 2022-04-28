import Card from "../Card";
import "./style.css";
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
    const filtered = movies.filter(
      (movie) =>         
        movie.title.toLowerCase().includes(filter.toLowerCase()) 
        ||
        movie.genres.forEach(genre => genre.includes(filter))
    );
    setMoviesFiltered(filtered);
  }, [filter]);


  return (
    <div className="CardList">
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
