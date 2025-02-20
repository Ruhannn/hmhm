import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./About.jsx";

import User from "./Users.jsx";
import UserDetails from "./UserDetails.jsx";
import Post from "./post.jsx";

import Root from "./Root";
import Dark from "./Dark";
import DarkModeToggle from "./Dark";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/uu",
        element: <DarkModeToggle/>,
      },
      {
        path: "/us",
        element: <h1>me alone</h1>,
      },
      {
        path: "/user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <User></User>,
      },
      {
        path: "/user/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Post></Post>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
