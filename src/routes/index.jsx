import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import CategoryBooks from "../pages/CategoryBooks";
import BookModal from "../pages/BookDetailsModal";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>an error occured</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:category", element: <CategoryBooks /> },
      { path: "favorites", element: <Favorites /> },
      { path: "book/:bookId", element: <BookModal /> },
      { path: "*", element: <h1>404 not found</h1> },
    ],
  },
]);

export { router };
