import "./styles/global.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import FavoritesProvider from "./context/FavoritesContext.jsx";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <FavoritesProvider>
        <Header
          onSelectBooks={setSearchResults}
          onResetSearch={() => setSearchResults([])}
        />
        <main>
          <h1>Gutenberg book library</h1>
          <p>
            Browse through this random selection of books, search for your
            favorite books or browse books through categories.
          </p>
          <Outlet context={{ searchResults, setSearchResults }} />
        </main>
      </FavoritesProvider>
    </>
  );
}

export default App;
