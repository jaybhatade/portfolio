import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

function Navigation() {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-100% h-20 sticky top-0 left-0 z-[9999] ">
      <div className="p-3">
        <div className="text-white bg-zinc-900/[.96] rounded-full w-100 h-20 flex justify-between items-center mx-auto px-4 max-w-[1240px]  backdrop-blur-sm shadow-2xl">
          <h1 className="w-full font-bold uppercase text-3xl text-teal-500">
            Jay Bhatade
          </h1>
          <ul className="hidden md:flex">
            <li className="m-4 text-xl cursor-pointer hover:text-teal-600 transition duration-150 ease-in-out font-bold">
              <Link to="Home" smooth={true} duration={500} offset={-80}>
                Home
              </Link>
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-teal-600 transition duration-150 ease-in-out font-bold">
              <Link to="About" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-teal-600 transition duration-150 ease-in-out font-bold">
              <Link to="Stack" smooth={true} duration={500} offset={-50}>
                Stack
              </Link>
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-teal-600 transition duration-150 ease-in-out font-bold">
              <Link to="Projects" smooth={true} duration={500} offset={-90}>
                Projects
              </Link>
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-teal-600 transition duration-150 ease-in-out font-bold">
              <Link to="Contact" smooth={true} duration={500} offset={-50}>
                Contact
              </Link>
            </li>
          </ul>
          <div
            onClick={handelNav}
            className="cursor-pointer transition-all ease-in-out  block md:hidden"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-[50%] translate-x-[-50%] translate-y-[-50%] top-[265px] bg-zinc-900/[.98] border-[0.5px] overflow-hidden rounded-3xl w-[90%] h-fit transition-all ease-in-out duration-700 z-[189] backdrop-blur-sm shadow-2xl"
            : "fixed left-[150%] translate-x-[-50%] translate-y-[-50%] top-[265px] bg-zinc-900  border-[1px] overflow-hidden rounded-3xl w-[90%] h-fit transition-all ease-in-out duration-1000 z-[189] opacity-0"
        }
      >
        <ul className="text-white">
          <Link to="Home" smooth={true} duration={500} offset={-80}>
            <li className="p-4 border-b border-b-gray-700 hover:bg-zinc-950/[.5] transition-all ease-in-out duration-300">
              Home
            </li>
          </Link>
          <Link to="About" smooth={true} duration={500}>
            <li className="p-4 border-b border-b-gray-700 hover:bg-zinc-950/[.5]  transition-all ease-in-out duration-300">
              About
            </li>
          </Link>
          <Link to="Stack" smooth={true} duration={500} offset={-50}>
            <li className="p-4 border-b border-b-gray-700  hover:bg-zinc-950/[.5]  transition-all ease-in-out duration-300">
              Stack
            </li>
          </Link>

          <Link to="Projects" smooth={true} duration={500} offset={-100}>
            <li className="p-4 border-b border-b-gray-700  hover:bg-zinc-950/[.5]  transition-all ease-in-out duration-300">
              Projects
            </li>
          </Link>
          <Link to="Contact" smooth={true} duration={500} offset={-70}>
          <li className="p-4  hover:bg-zinc-950/[.5] ">
              Contact
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
