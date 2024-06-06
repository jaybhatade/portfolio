import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Projects() {
  return (
    <div className="   w-100 bg-black h-fit flex items-center justify-center  text-white">
      <div className="max-w-[1240px] w-[95%]  flex flex-col items-center justify-center">
        <div className="w-[100%] h-100 p-4 md:pt-4 pb-2 flex items-start justify-start md:items-end md:justify-center">
          <h1 className="uppercase text-[34px] text-left md:text-[55px] font-bold">
            Featured Projects
          </h1>
        </div>
        <div className="w-100 h-fit p-4 md:p-6 md:pt-0 ">
          <p className="text-[18px]">
            These are some of the selected projects to showcase my Front-End
            Developement Skills{" "}
          </p>
        </div>
        <div className="w-11/12 h-[2.5px] bg-white rounded-full my-1 mb-4"></div>

        <div className="h-fit w-[100%] flex flex-col md:flex-row  p-6 ">
          <div className="w-100 md:w-1/2 h-fit bg-black  md:p-4 rounded-l-2xl">
            <h4 className="font-semibold text-2xl md:text-3xl pb-4">
              <span className="md:ml-2 font-mono text-teal-600">0.1 </span> Gym
              Fit Website
            </h4>

            <img
              src="https://plus.unsplash.com/premium_photo-1714051661301-860c930a2c85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-fit  w-[100%] rounded-2xl"
              alt=""
            />
          </div>
          <div className="w-100 md:w-1/2 h-100 bg-black rounded-r-2xl pt-4 md:p-4 md:pt-8 md:pr-6 flex flex-col justify-between">
            <div className="h-[75%] flex flex-col justify-between">
              <div className="w-100 h-fit text-left md:text-right">
                <h2 className="text-md font-mono font-bold uppercase text-teal-600">
                  Featured project{" "}
                </h2>
                <p className="text-4xl font-bold">Gym Website</p>
              </div>
              <div className="mt-6 ">
                <p className="text-xl text-left md:text-right ">
                  This is a Minimalistic Gym Website built with HTML, CSS, and
                  JavaScript. With integration of Google Fonts for enhanced and
                  modern typography
                </p>

                <div className="flex gap-4 md:gap-6 justify-start md:justify-end pt-8 md:px-0 md:py-4 flex-wrap md:mt-4">
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    HTML
                  </h2>
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    CSS
                  </h2>
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    Google Fonts
                  </h2>
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    Javascript
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-[100%]  h-[25%] flex justify-start py-10 md:py-0 md:justify-end items-end ">
              {" "}
              <a href="#" className="px-4 py-2 h-fit bg-teal-950 w-fit flex items-center rounded-md text-white font-bold border-2 border-teal-600 hover:bg-teal-800 transition-all ease-in-out duration-800">
                {" "}
                Veiw Project <MdArrowOutward size={20} className="ml-2" />
              </a>
            </div>

          </div>
        </div>
{/* Second Project  */}


<div className="h-fit w-[100%] flex flex-col md:flex-row  p-6 ">
          <div className="w-100 md:w-1/2 h-fit bg-black  md:p-4 rounded-l-2xl">
            <h4 className="font-semibold text-2xl md:text-3xl pb-4">
              <span className="md:ml-2 font-mono text-teal-600">0.2 </span> Gym
              Fit Website
            </h4>

            <img
              src="https://plus.unsplash.com/premium_photo-1714051661301-860c930a2c85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-fit  w-[100%] rounded-2xl"
              alt=""
            />
          </div>
          <div className="w-100 md:w-1/2 h-100 bg-black rounded-r-2xl pt-4 md:p-4 md:pt-8 md:pr-6 flex flex-col justify-between">
            <div className="h-[75%] flex flex-col justify-between">
              <div className="w-100 h-fit text-left md:text-right">
                <h2 className="text-md font-mono font-bold uppercase text-teal-600">
                  Featured project{" "}
                </h2>
                <p className="text-4xl font-bold">Gym Website</p>
              </div>
              <div className="mt-6 ">
                <p className="text-xl text-left md:text-right ">
                  This is a Minimalistic Gym Website built with HTML, CSS, and
                  JavaScript. With integration of Google Fonts for enhanced and
                  modern typography
                </p>

                <div className="flex gap-4 md:gap-6 justify-start md:justify-end pt-8 md:px-0 md:py-4 flex-wrap md:mt-4">
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    HTML
                  </h2>
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    CSS
                  </h2>
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    Google Fonts
                  </h2>
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    Javascript
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-[100%]  h-[25%] flex justify-start py-10 md:py-0 md:justify-end items-end ">
              {" "}
              <a href="#" className="px-4 py-2 h-fit bg-teal-950 w-fit flex items-center rounded-md text-white font-bold border-2 border-teal-600 hover:bg-teal-800 transition-all ease-in-out duration-800">
                {" "}
                Veiw Project <MdArrowOutward size={20} className="ml-2" />
              </a>
            </div>

          </div>
        </div>

{/* Third Project  */}


<div className="h-fit w-[100%] flex flex-col md:flex-row  p-6 ">
          <div className="w-100 md:w-1/2 h-fit bg-black  md:p-4 rounded-l-2xl">
            <h4 className="font-semibold text-2xl md:text-3xl pb-4">
              <span className="md:ml-2 font-mono text-teal-600">0.3 </span> Gym
              Fit Website
            </h4>

            <img
              src="https://plus.unsplash.com/premium_photo-1714051661301-860c930a2c85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-fit  w-[100%] rounded-2xl"
              alt=""
            />
          </div>
          <div className="w-100 md:w-1/2 h-100 bg-black rounded-r-2xl pt-4 md:p-4 md:pt-8 md:pr-6 flex flex-col justify-between">
            <div className="h-[75%] flex flex-col justify-between">
              <div className="w-100 h-fit text-left md:text-right">
                <h2 className="text-md font-mono font-bold uppercase text-teal-600">
                  Featured project{" "}
                </h2>
                <p className="text-4xl font-bold">Gym Website</p>
              </div>
              <div className="mt-6 ">
                <p className="text-xl text-left md:text-right ">
                  This is a Minimalistic Gym Website built with HTML, CSS, and
                  JavaScript. With integration of Google Fonts for enhanced and
                  modern typography
                </p>

                <div className="flex gap-4 md:gap-6 justify-start md:justify-end pt-8 md:px-0 md:py-4 flex-wrap md:mt-4">
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    HTML
                  </h2>
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    CSS
                  </h2>
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    Google Fonts
                  </h2>
                  <h2 className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                    Javascript
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-[100%]  h-[25%] flex justify-start py-10 md:py-0 md:justify-end items-end ">
              {" "}
              <a href="#" className="px-4 py-2 h-fit bg-teal-950 w-fit flex items-center rounded-md text-white font-bold border-2 border-teal-600 hover:bg-teal-800 transition-all ease-in-out duration-800">
                {" "}
                Veiw Project <MdArrowOutward size={20} className="ml-2" />
              </a>
            </div>

          </div>
        </div>


      <div className="w-[95%] h-[2.5px] bg-white rounded-full my-1 mt-4"></div>


      </div>
    </div>
  );
}

export default Projects;
