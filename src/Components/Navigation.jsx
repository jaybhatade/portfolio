import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navigation() {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-100% h-20 sticky top-0 left-0 z-[9999]">
      <div className=" p-3">
        <div className="text-white bg-zinc-900/[.96] rounded-full w-100 h-20 flex justify-between items-center mx-auto px-4 max-w-[1240px]  backdrop-blur-sm">
          <h1 className="w-full font-bold uppercase text-3xl text-teal-500">
            Jay Bhatade
          </h1>
          <ul className="hidden md:flex ">
            <li className="m-4 text-xl cursor-pointer hover:text-teal-600 transition duration-150 ease-in-out font-bold">
              Home
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-teal-600 transition duration-150 ease-in-out font-bold">
              About
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-teal-600 transition duration-150 ease-in-out font-bold">
              Stack
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-teal-600 transition duration-150 ease-in-out font-bold">
              Projects
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-teal-600 transition duration-150 ease-in-out font-bold">
              Contact
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
            ? "fixed left-0 top-0 bg-zinc-900 w-[60%] border-r border-r-zinc-700 h-screen transition-all ease-in-out duration-500 z-[9999]"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="w-full font-bold uppercase text-3xl text-[#00df9a] p-4">
          Jay Bhatade
        </h1>
        <ul className=" text-white">
          <li className="p-4 border-b border-b-gray-700 hover:bg-zinc-950 transition-all ease-in-out duration-300">Home</li>
          <li className="p-4 border-b border-b-gray-700 hover:bg-zinc-950 transition-all ease-in-out duration-300">About</li>
          <li className="p-4 border-b border-b-gray-700 hover:bg-zinc-950 transition-all ease-in-out duration-300">Stack</li>
          <li className="p-4 border-b border-b-gray-700 hover:bg-zinc-950 transition-all ease-in-out duration-300">Projects</li>
          <li className="p-4 hover:bg-zinc-950">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
