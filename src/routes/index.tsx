import { createBrowserRouter } from "react-router-dom";
import { Home, Favorites } from "../Pages";

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
