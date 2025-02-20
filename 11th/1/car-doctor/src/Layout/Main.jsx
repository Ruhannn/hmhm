import { Outlet } from "react-router-dom";
import Footer from "../Routers/Shared/Footer";
import Slider from "../Navbar/Slider";

import Navbarr from "../NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <Navbarr></Navbarr>
      <Slider></Slider>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
