import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots/Roots";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        }
    ]
  },
]);