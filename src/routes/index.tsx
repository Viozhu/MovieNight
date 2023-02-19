import { createBrowserRouter } from "react-router-dom";
import { Home, Favorites } from "../Pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);
