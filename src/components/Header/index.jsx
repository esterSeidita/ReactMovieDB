import  "./style.scss";
import Logo from "../../img/logo.png";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img
        src={Logo}
        alt="Movies Collection"
      />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddMovie">Add Movie</Link>
          </li>          
        </ul>
      </nav>
    </header>
  );
}
