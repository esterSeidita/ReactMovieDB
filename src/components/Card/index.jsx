import "./style.css";
import { DeleteData } from "../../utils";
import {Link} from "react-router-dom";

export default function Card({ movie, cardID, setUpdateCardId}) {

  const updateCard = () => {
    setUpdateCardId(cardID);
  }
  

  return (
    <div className="Card">
      <img
        src={movie.poster && movie.poster}
        alt={movie.title && movie.title}
      />
      <div className="mainCard">
        <h2>{movie.title && movie.title}</h2>
        <p>{movie.year && movie.year}</p>
        <ul>
          {movie && Array.isArray(movie.genres) ? movie.genres.map((genre, index) => <li key={index}>{genre}</li>):<li>{movie.genres}</li>}
        </ul>
        <button onClick={()=>DeleteData(cardID)}>Delete</button>
        <Link to={"UpdateMovie"}>
          <button onClick={()=>updateCard()}>Update</button>
        </Link>
      </div>
    </div>
  );
}
