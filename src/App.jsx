import "./styles/global.css";
import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import FavoritesProvider from "./context/FavoritesContext.jsx";

function App() {
  const [searchData, setSearchData] = useState(null);
  const searchBarRef = useRef() 


  // reset search input
  const handleHomeClick = () => {
    searchBarRef.current?.reset();
    setSearchData(null)
  }

  return (
    <>
      <FavoritesProvider>
        <Header
          onSelectData={setSearchData}
          searchBarRef={searchBarRef}
          onHomeClick={handleHomeClick}
        />
        <main>
          <h1>Gutenberg book library</h1>
          <p>
            Browse through this random selection of books, search for your
            favorite books or browse books through categories.
          </p>
          <Outlet context={{ searchData}} />
        </main>
      </FavoritesProvider>
    </>
  );
}

export default App;
