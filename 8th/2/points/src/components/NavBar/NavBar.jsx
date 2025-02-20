import React, { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      path: "/",
      name: "Home",
      id: 1,
    },
    {
      path: "/about",
      name: "About",
      id: 2,
    },
    {
      path: "/products",
      name: "Products",
      id: 3,
    },
    {
      path: "/contact",
      name: "Contact",
      id: 4,
    },
    {
      path: "*",
      name: "NotFound",
      id: 5,
    },
  ];

  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}

    
      </div>
      <ul className={`md:flex absolute bg-slate-300 duration-1000 px-6 shadow-lg text-stone-950 ml-7  md:static ${open ? 'top-16': '-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
