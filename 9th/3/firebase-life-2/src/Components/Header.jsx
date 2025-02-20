import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
const Links = (
  <>
    <NavLink to="/home">
      <li>
        <a>home</a>
      </li>
    </NavLink>
    <NavLink to="/login">
      <li>
        <a>log in</a>
      </li>
    </NavLink>
    <NavLink to="/signup">
      <li>
        <a>Sign up</a>
      </li>
    </NavLink>
  </>
);

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        console.log("done logout");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const setRandomTheme = () => {
  //   const themes = [
  //     "light",
  //     "dark",
  //     "cupcake",
  //     "bumblebee",
  //     "emerald",
  //     "corporate",
  //     "synthwave",
  //     "retro",
  //     "cyberpunk",
  //     "valentine",
  //     "halloween",
  //     "garden",
  //     "forest",
  //     "aqua",
  //     "lofi",
  //     "pastel",
  //     "fantasy",
  //     "wireframe",
  //     "black",
  //     "luxury",
  //     "dracula",
  //     "cmyk",
  //     "autumn",
  //     "business",
  //     "acid",
  //     "lemonade",
  //     "night",
  //     "coffee",
  //     "winter",
  //   ];
  //   const randomIndex = Math.floor(Math.random() * themes.length);
  //   const randomTheme = themes[randomIndex];
  //   document.documentElement.setAttribute("data-theme", randomTheme);
  // };
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {Links}
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          Grab an apple
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div class="navbar-end">
        <button onClick={setRandomTheme} className="btn mx-3">
          Change
        </button>
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="User Avatar" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <h1>{user.name}</h1>
              </li>
              <li>
                <h1>{user.email}</h1>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        )}
        {!user && (
          <li>
            <Link to="/login">
              <a>Log In</a>
            </Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Header;
