import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useAllBooks } from "./hooks/useBookQuery";

function App() {
  const {data, isLoading, isError, error} = useAllBooks();

  if (isLoading) return <h3>Loading...</h3>
  if (isError) return <h3>Error, could not load books{error}</h3>
  return (
    <>
      <Header />
      {/* <Outlet/> */}
    </>
  );
}

export default App;
