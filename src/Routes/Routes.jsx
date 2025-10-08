import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots/Roots";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Apps from "../Pages/Apps/Apps";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";
import InstallPage from "../Pages/InstallPage/InstallPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/appDetails/:id",
        Component: AppsDetails,
        loader: () => {
          return (
            fetch('/appData.json')
          )
        }
      },
      {
        path: "/installation",
        Component: InstallPage,
        loader: () => {
          return (
            fetch('/appData.json')
          )
        }
      }
    ]
  },
]);
