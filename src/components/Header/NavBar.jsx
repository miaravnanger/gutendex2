import { Link } from "react-router-dom";
import "../../styles/global.css"

export default function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/gutendex2/">Home</Link>
      <Link to="books">Books</Link>
      <Link to="favorites">Favorites</Link>
    </nav>
  );
}
