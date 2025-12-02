import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import CategoryBooks from "../pages/CategoryBooks";


const router = createBrowserRouter([
  {
    path: "/gutendex2/",
    element: <App />,
    errorElement: <h1>an error occured</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:category", element: <CategoryBooks /> },
      { path: "favorites", element: <Favorites /> },
      { path: "*", element: <h1>404 not found</h1> },
    ],
  },
]);

export { router };
