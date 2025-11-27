import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="favorites">Favorites</Link>
      <Link to="categories">Category</Link>
    </nav>
  );
}
