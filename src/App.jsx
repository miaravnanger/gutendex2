import "./styles/global.css";
import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import FavoritesProvider from "./context/FavoritesContext.jsx";

function App() {
  const [searchData, setSearchData] = useState(null);
  const searchBarRef = useRef() 


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
          <Outlet context={{ searchData}} />
        </main>
      </FavoritesProvider>
    </>
  );
}

export default App;
