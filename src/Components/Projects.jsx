import React from "react";

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
          <div className="w-100 md:w-1/2 h-fit bg-black  p-4 rounded-l-2xl">
            <h4 className="font-bold text-3xl pb-4"><span className="ml-2 font-mono text-teal-600">0.1 </span> Gym Fit Website</h4>
            
            <img src="https://plus.unsplash.com/premium_photo-1714051661301-860c930a2c85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-[320px] w-[100%] rounded-2xl" alt="" />
            
          </div>
          <div className="w-100 md:w-1/2 h-100 bg-zinc-900 rounded-r-2xl py-10"> 
           <div className="w-100 h-fit bg-teal-400 text-right">
            <h2 className="text-md font-mono font-bold uppercase">Featured project </h2>
            <p className="text-4xl font-regular">Gym Website</p>
           </div>
          </div>
        </div>

        
          


      </div>
    </div>
  );
}

export default Projects;
