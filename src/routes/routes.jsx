import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Team from "../pages/Team";
import Blogs from "../pages/Blogs";
import Trips from "../pages/Trips";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destinations",
        element: <Destinations />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/trips",
        element: <Trips />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
