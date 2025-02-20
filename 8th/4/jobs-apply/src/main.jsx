import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Rooot from "./components/Rooot/Rooot";
import Home from "./components/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rooot></Rooot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/job:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
