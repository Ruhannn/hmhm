import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Main from "./Layout/Main";
import LogIn from "./components/LogIn";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path: "/",
      element: <Home></Home> ,
      path: "/login",
      element: <LogIn></LogIn> ,
    }]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
