import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";


function FooterSection() {
    return (
        <div className='text-white w-100 h-fit flex items-center justify-center'>
            <footer className='w-[100%] h-fit max- bg-slate-500 flex flex-col '>
                <div className='bg-zinc-900 w-100 h-fit '>
                    <div className='flex justify-center gap-5 pt-8'>
                        <a target='_blank' href='https://www.instagram.com/jaybhatade.ai/' className='h-fit w-fit p-3 rounded-full bg-white flex items-center justify-center text-black hover:bg-teal-600 transition-all duration-500 ease-in-out'> <FaInstagram size={25} /></a>
                        <a target='_blank' href='https://github.com/jaybhatade' className='h-fit w-fit p-3 rounded-full bg-white flex items-center justify-center text-black hover:bg-teal-600 transition-all duration-500 ease-in-out'> <FaGithub size={25} /></a>
                        <a target='_blank' href='https://x.com/jaybhatade' className='h-fit w-fit p-3 rounded-full bg-white flex items-center justify-center text-black hover:bg-teal-600 transition-all duration-500 ease-in-out'> <FaXTwitter size={25} /></a>
                        <a target='_blank' href='https://in.linkedin.com/in/jay-bhatade' className='h-fit w-fit p-3 rounded-full bg-white flex items-center justify-center text-black hover:bg-teal-600 transition-all duration-500 ease-in-out'> <FaLinkedin size={25} /></a>
                    </div>
                    <div className='flex gap-5 justify-center items-center py-8'>
                        <Link to="Home" smooth={true} duration={500} offset={-80} className='text-lg font-bold hover:text-teal-600 transition-all duration-500 ease-in-out'>Home</Link>
                        <Link to="About" smooth={true} duration={500} className='text-lg font-bold hover:text-teal-600 transition-all duration-500 ease-in-out'>About</Link>
                        <Link to="Stack" smooth={true} duration={500} offset={-50} className='text-lg font-bold hover:text-teal-600 transition-all duration-500 ease-in-out'>Stack</Link>
                        <Link to="Projects" smooth={true} duration={500} offset={-100} className='text-lg font-bold hover:text-teal-600 transition-all duration-500 ease-in-out'>Projects</Link>
                        <Link to="Contact" smooth={true} duration={500} offset={-30} className='text-lg font-bold hover:text-teal-600 transition-all duration-500 ease-in-out'>Contact</Link>

                    </div>
                </div>
                <div className='w-100 h-[] flex justify-center items-center bg-[#0a0a0a] p-4'>
                    <h2 className='text-xs md:text-lg font-medium'>Copyright &#169; 2024; Designed & Developed by JAY BHATADE</h2>
                </div>
            </footer>
        </div>
    )
}

export default FooterSection