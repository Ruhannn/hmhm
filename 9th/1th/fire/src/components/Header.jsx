import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex">
      <Link to="/" className="header-link">
        Home
      </Link>
      <Link to="/login" className="header-link">
        Log in
      </Link>
    </header>
  );
};

export default Header;
