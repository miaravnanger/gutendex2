import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Category from "../pages/Category";
import BookDetails from "../pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>an error occured</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:id", element: <Category /> },
      { path: "favorites", element: <Favorites /> },
      { path: "book/:id", element: <BookDetails /> },
      { path: "*", element: <h1>404 not found</h1> },
    ],
  },
]);

export { router };
