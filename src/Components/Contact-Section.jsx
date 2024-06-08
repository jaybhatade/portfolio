import React from "react";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin , FaGithub , FaInstagram  } from "react-icons/fa";

function ContactSection() {
  return (
    <div id="Contact" className="w-100 h-fit flex justify-center items-center text-white py-10">
      <div className="w-[100%] h-fit max-w-[1240px] flex flex-col justify-center items-center">
        

        <div className="w-[100%] flex flex-col md:flex-row">
          <div className="w-100 md:w-[50%] p-8 rounded-l-2xl flex flex-col justify-between ">
            <h2 className="text-4xl md:text-[43px] leading-tight font-bold">Let's Talk <br /> on Something Great <br />Togeather</h2>

            <ul>
                <li className="w-fit"><a target='_blank' href="mailto:jaybhatade7@gmail.com" className="flex gap-3 my-7"><MdMailOutline size={25}/> jaybhatade7@gmail.com</a></li>
                <li className="w-fit"><a target='_blank' href="https://www.instagram.com/jaybhatade.ai/" className="flex gap-3 my-7"><FaInstagram  size={25}/>jaybhatade.ai</a></li>
                <li className="w-fit"><a target='_blank' href="https://in.linkedin.com/in/jay-bhatade" className="flex gap-3 my-7"><FaLinkedin  size={25}/>jay-bhatade</a></li>
                <li className="w-fit"><a target='_blank' href="https://github.com/jaybhatade" className="flex gap-3 my-7"><FaGithub  size={25}/> @jaybhatade</a></li>
            </ul>
          </div>
          <div className="w-100 md:w-[50%] h-fit p-8 md:px-10 rounded-r-2xl ">
            <div className="bg-zinc-900 rounded-3xl w-[100%]  h-[100%] text-white py-6 px-4 md:p-8">
                <form action="" method="post">
                
                <label className="text-md font-semibold" htmlFor="name">Your Name</label> <br />
                <input className="w-[100%] h-10 bg-zinc-800 mb-8 rounded-lg pl-2  transition-all duration-400 ease-in-out border-2 border-transparent focus:outline-teal-500 mt-2" type="text" placeholder="John William"/>
                

                
                <label className="text-md font-semibold" htmlFor="email">Email</label> <br />
                <input className="w-[100%] h-10  bg-zinc-800 mb-8 rounded-lg pl-2  transition-all duration-400 ease-in-out border-2 border-transparent focus:outline-teal-500  mt-2" type="text" placeholder="abc@gmail.com"/>
                
                

                <label className="text-md font-semibold" htmlFor="email">Subject</label> <br />
                <input className="w-[100%] h-10  bg-zinc-800 mb-8 rounded-lg pl-2  transition-all duration-400 ease-in-out border-2 border-transparent focus:outline-teal-500  mt-2" type="text" placeholder="Write your subject"/>
                

                
                <label className="text-md font-semibold" htmlFor="email">Message</label> <br />
                <input className="w-[100%] h-10  bg-zinc-800 mb-8 rounded-lg pl-2  transition-all duration-400 ease-in-out border-2 border-transparent focus:outline-teal-500 mt-2" type="text" placeholder="Write message"/>
                
                <input type="submit" value="Submit" className="px-4 py-2 mr-3 rounded-full text-white bg-teal-800 border-teal-500 border-2 hover:bg-teal-600"/>
                <input type="reset" value="Clear"   className="px-4 py-2 rounded-full text-white bg-teal-800 border-teal-500 border-2 hover:bg-teal-600"/>
                </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
