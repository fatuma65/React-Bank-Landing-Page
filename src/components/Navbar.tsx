import { useState } from "react";
// import {close,menu} from '../assets'
import { logo, menu, close } from "../constants/images";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle((prev) => !prev);
  };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoo bank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}>
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center">
        <img
          onClick={handleToogle}
          src={toogle ? close : menu}
          alt=""
          className="w-[28px] cursor-pointer object-contain h-[28px]"
        />
      </div>

      <div
        className={`${
          toogle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className="list-none flex-col flex justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] m-2 ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } text-white`}>
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
