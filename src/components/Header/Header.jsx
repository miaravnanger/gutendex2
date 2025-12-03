import NavBar from "./NavBar";
import "../../styles/global.css";
import Searchbar from "../SearchBar";

export default function Header({ onSelectBooks, onResetSearch }) {
  return (
    <header className="header">
      <Searchbar onSelectBooks={onSelectBooks} />
      <NavBar onResetSearch={onResetSearch} />
    </header>
  );
}
