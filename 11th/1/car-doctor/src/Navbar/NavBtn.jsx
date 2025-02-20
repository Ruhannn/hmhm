

const NavBtn = () => {
  return (
    <div>
      <span className="cursor-pointer absolute">
        <input
          className="bg-transparent cursor-pointer border-[3px] border-black  text-white h-7 float-left outline-none transition-all duration-300 rounded-2xl ease-in-out w-7 focus:rounded-[21px] focus:border-[2px] focus:cursor-text focus:h-10 focus:leading-[1.6] focus:px-5 focus:w-[300px]"
          type="search"
          id="search"
        />
        <label
          className="bg-black bottom-[-6px] absolute right-0 h-3 transform -rotate-45 w-1 transition-all duration-300 ease-in-out"
          htmlFor="search"></label>
      </span>
    </div>
  );
};

export default NavBtn;
