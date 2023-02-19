import { createBrowserRouter } from "react-router-dom";
import { Home, Favorites } from "../pages";

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
