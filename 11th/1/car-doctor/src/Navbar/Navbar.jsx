import { useState } from "react";
import { Link } from "react-router-dom";
import NavBtn from "./NavBtn";
import Cart from "./Cart";


const Navbarr = () => {
  const navItems = ["Home", "About", "Services", "Blog", "Contact"];

  const NavLinks = (
    <>
      {navItems.map((item, index) => (
        <li key={index} className="relative text-black">
          <Link to={`/${item.toLowerCase()}`} className="mx-[0.7vw] hover:text-[#ffa08d]">
            {item}
          </Link>
        </li>
      ))}
    </>
  );
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const styles = `
    .nav-links li a::before {
      content: "";
      display: block;
      height: 3px;
      width: 0%;
      background-color: #ffa08d;
      position: absolute;
      transition: all ease-in-out 250ms;
      margin: 0 0 0 10%;
    }

    .nav-links li a:hover::before {
      width: 80%;
    }

    .hamburger div {
      width: 30px;
      height: 3px;
      background: #ffa08d;
      margin: 5px;
      transition: all 0.3s ease;
    }

    .hamburger {
      display: none;
    }

    @media screen and (max-width: 800px) {
      nav {
        z-index: 3;
      }

      .hamburger {
        display: block;
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 5%;
        transform: translate(-5%, -50%);
        z-index: 2;
        transition: all 0.7s ease;
      }

      .nav-links {
        position: fixed;
        background: #131418;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(50px at 90% -20%);
        -webkit-clip-path: circle(50px at 90% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .nav-links.open {
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
        pointer-events: all;
        display: flex;
      }
      .nav-links a{
        color: #fff;
      }
      .nav-links li{
        opacity: 1;
        margin: 10px 0;
      }
    }

    .toggle .line1 {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle .line2 {
      transition: all 0.7s ease;
      width: 0;
    }

    .toggle .line3 {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `;
  return (
    <>
      <style>{styles}</style>
      <nav className="h-[6rem] flex z-10 items-center">
        <div className="text-center py-[1vh] px-[1vw]">
          <img
            src="/src/assets/logo.svg"
            className="h-20 w-20"
            alt="Logo Image"
          />
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "toggle" : ""}`}
          onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul
          className={`nav-links flex list-none w-[88vw] px-[0.7vw] justify-center items-center text-lg text-[#444] font-semibold ${
            isMenuOpen ? "open" : ""
          }`}>
          {NavLinks}
        </ul>
        <div>
          <NavBtn></NavBtn>
          <Cart></Cart>
        </div>
      </nav>
    </>
  );
};

export default Navbarr;
