import React from "react";
import Marquee from "react-fast-marquee";

function Stack() {
  return (
    <div id="Stack" className="flex flex-col bg-black items-center justify-center">
      <div className="w-100 max-w-[1240px] h-fit py-[50px] bg-black text-white flex md:flex-row flex-col">
        <div className="md:w-[35%] w-[100%] pl-8 pt-4 md:p-4 rounded-3xl ">
          <h1 className="md:text-[55px] text-[40px] font-bold uppercase w-fit h-fit">
            Tech Stack :
          </h1>
        </div>
        <div className="md:w-[65%] w-[100%] p-8 md:p-4">
          <p className=" text-[20px] md:text-[27px] font-regular md:p-4">
            With a wealth of experience in web development, I've dedicated
            myself to crafting exceptional digital experiences.
          </p>
          <div>
            <div className="flex gap-6 justify-start pt-8 md:p-4 flex-wrap">
            <h2 className="py-2 px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out">Html</h2>
            <h2 className="py-2 px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out">CSS</h2>
            <h2 className="py-2 px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out">Javascript</h2>
            <h2 className="py-2 px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out">React</h2>
            <h2 className="py-2 px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out">Tailwind CSS</h2>
            <h2 className="py-2 px-8 bg-teal-600/45 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out">ASP.NET</h2>
            <h2 className="py-2 px-8 bg-teal-600/45 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out">PHP</h2>
            <h2 className="py-2 px-8 bg-teal-600/45 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out">WordPress</h2>
            <h2 className="py-2 px-8 bg-teal-600/45 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out">My SQL</h2>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
