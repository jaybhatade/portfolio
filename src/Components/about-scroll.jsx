import React from "react";
import Marquee from 'react-fast-marquee'

function AboutScroll() {
  return (
    <div className="w-100 h-fit relative flex justify-center flex-col items-center">
      <div className="w-100 h-fit py-8 bg-white rounded-t-3xl md:rounded-t-[50px] flex justify-center items-center">
        <Marquee>
        <h1 className="text-black text-[40px] md:text-[80px] font-bold uppercase">  Innovative , Creative , Passionate , Collaborative , Innovative , Creative , Passionate , Collaborative , Innovative , Creative , Passionate , Collaborative , </h1>
        </Marquee>
      </div>
      <div className="w-100 max-w-[1240px] h-fit py-[50px] bg-black text-white flex md:flex-row flex-col">
        
        <div className="md:w-[35%] w-[100%] pl-8 pt-4 md:p-4  rounded-3xl ">
          <h1 className="md:text-[55px] text-[40px] font-bold uppercase w-fit h-fit">About Me :</h1>
        </div>
        <div className="md:w-[65%] w-[100%] p-8 md:p-4">
          <p className=" text-[20px] md:text-[27px] font-regular md:p-4">
          With a wealth of experience in web development, I've dedicated myself to crafting exceptional digital experiences. 
          Through collaborative efforts, I've had the privilege of working on projects that prioritize responsiveness and visual appeal. Let's collaborate to bring your vision to life and make an impact in the digital realm.
          </p> 
        </div>

      </div>
    </div>
  );
}

export default AboutScroll;
