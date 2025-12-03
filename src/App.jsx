import "./styles/global.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import FavoritesProvider from "./context/FavoritesContext.jsx";

function App() {
  return (
    <>
      <FavoritesProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </FavoritesProvider>
    </>
  );
}

export default App;
