import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <Link to="books">Books</Link>
      <Link to="favorites">Favorites</Link>
    </nav>
  );
}
