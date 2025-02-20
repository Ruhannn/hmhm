import { AiFillLinkedin, AiOutlineGoogle } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#151515] lg:p-40 p-20 flex justify-around lg:items-center flex-col lg:flex-row">
      <div>
        <img src="/src/assets/logo.svg" alt="Car Doctor Logo" />
        <p className="text-[#E8E8E8] my-5 lg:text-xs lg:w-72">
          Embark on a journey with us into the world of wheels. Explore a
          spectrum of rides from sleek speedsters to rugged off-roaders. Find
          your drive, chase your horizon. This is where every mile becomes a
          story.
        </p>
        <div className="text-white flex flex-col md:flex-row lg:flex-row gap-3">
          <div className="bg-[#2c2c2c] p-3 rounded-full flex items-center justify-center gap-4">
            <AiOutlineGoogle />
            <h1 className="lg:hidden md:hidden text-xs">Car Doctor</h1>
          </div>
          <div className="bg-[#2c2c2c] p-3 rounded-full flex items-center justify-center gap-4">
            <RiTwitterFill />
            <h1 className="lg:hidden md:hidden text-xs">@Car_Doctor</h1>
          </div>
          <div className="bg-[#2c2c2c] p-3 rounded-full flex items-center justify-center gap-4">
            <BsInstagram />
            <h1 className="lg:hidden md:hidden text-xs">Car_Doctor</h1>
          </div>
          <div className="bg-[#2c2c2c] p-3 rounded-full flex items-center justify-center gap-4">
            <AiFillLinkedin />
            <h1 className="lg:hidden md:hidden text-xs">Car_Doctor</h1>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mt-0">
        <h1 className="text-white text-xl font-semibold mb-6">About</h1>
        <div className="text-[#797979] grid gap-3">
          <a href="#">Home</a>
          <a className="my-2" href="#">Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="my-6">
        <h1 className="text-white text-xl font-semibold mb-6">Company</h1>
        <div className="text-[#797979] grid gap-3">
          <a href="#">Why Car Doctor</a>
          <a className="my-2" href="#">Service</a>
          <a href="#">About</a>
        </div>
      </div>
      <div>
        <h1 className="text-white text-xl font-semibold mb-6">Support</h1>
        <div className="text-[#797979] grid gap-3">
          <a href="#">Support Center</a>
          <a className="my-2" href="#">Feedback</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
