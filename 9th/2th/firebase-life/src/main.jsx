import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LogIn from "./Components/LogIn/LogIn";
import Rooot from "./Components/Rooot/Rooot";
import Signup from "./Components/sIGNUP/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rooot></Rooot>,
    children: [
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
