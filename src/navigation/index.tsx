import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../screens/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const MainNavigation = () => {
  return <RouterProvider router={router} />

};

export default MainNavigation;
