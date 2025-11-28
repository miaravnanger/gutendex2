import NavBar from "./NavBar";
import "../../styles/global.css"

export default function Header() {
  return (
    <header className="header">
      <div className="search">
        <input className="searchInput" type="text" placeholder="search for your favorite books" />
      </div>
      <NavBar />
    </header>
  );
}
