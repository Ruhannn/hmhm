import React from "react";
import Header from "../Headrer/Header";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";

const Rooot = () => {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Outlet></Outlet>
    </>
  );
};

export default Rooot;
