import NavBar from "./NavBar";
import "../../styles/global.css"
import Searchbar from "../SearchBar";

export default function Header() {
  return (
    <header className="header">
      <Searchbar/>
      <NavBar />
    </header>
  );
}
