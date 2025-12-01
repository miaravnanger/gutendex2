import { Link } from "react-router-dom";
import "../../styles/global.css";
import BookModal from "../Modal";

export default function NavBar() {
  return (
    <nav className="navBar">
      <BookModal />
      <Link to="favorites">Favorites</Link>
      <Link to="/gutendex2/">Home</Link>
    </nav>
  );
}
