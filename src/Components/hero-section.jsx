import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const HeroSection = () => {
  return (
    <section className="bg-black py-12  lg:py-20 h-[calc(100vh-60px)] z-[2] md:h-fit lg:h-[calc(100vh-60px)] lg:flex ">
      <div className="container mx-auto max-w-[1240px] flex flex-col-reverse lg:flex-row items-center justify-center px-4 space-y-0 lg:space-y-0 lg:space-x-12 relative ">
        <div className="flex flex-col justify-center text-left lg:text-left lg:flex-1 lg:space-y-8">
          <p className="text-[20PX] lg:text-3xl font-medium text-white">
            Hi there, I'm a Jay Bhatade
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mt-2">
            Passionate about building creatives and unique websites.
          </h1>
          <p className="text-white mt-2">
            With years of experience in web development, I specialize in
            creating responsive and user-friendly websites that deliver results.
          </p>
          <div className="flex justify-start lg:justify-start space-x-4 mt-8 lg:mt-12">
          <a target='_blank' href="https://github.com/jaybhatade"
              className="text-white hover:text-teal-600 transition duration-150 ease-in-out flex justify-center items-center"
            >
              <FaGithub size={35} />
            </a>
            <a target='_blank' href="https://in.linkedin.com/in/jay-bhatade"
              className="text-white hover:text-teal-600 transition duration-150 ease-in-out flex justify-center items-center"
            >
              <TiSocialLinkedinCircular size={45} />
            </a>
            <a
              href="#"
              className="text-white  transition duration-150 ease-in-out"
            >
              <div className="w-full flex items-center justify-center cursor-pointer">
                <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-teal-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-teal-800 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-5 h-5 text-green-400"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-5 h-5 text-green-400"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                    let's Connect
                  </span>
                </div>
              </div>
            </a>

          </div>
        </div>
        <div className="flex justify-center  lg:justify-center flex-1">
          <img
            src="https://iili.io/JbXfKB9.jpg"
            alt="Hero"
            className="rounded-lg shadow-lg w-[65%] h-[100%] mb-16 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
