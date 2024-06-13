//router import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Layout imports
import MainLayout from "../layouts/MainLayout";
//import copmonent
import HomePage from "../components/pages/HomePage";
import Error404 from "../layouts/Error404";
import Enrollment from "../components/pages/Enrollment";
import Gallery from "../components/pages/Gallery";
import AboutUs from "../components/pages/AboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Enrollment",
        element: <Enrollment />,
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/AboutUS",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
