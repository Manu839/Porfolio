import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resume from "../assets/MANUSAI.pdf";

function Footer() {
  return (
    <div class="text-center p-6 font-DMSans bg bg-gradient-to-b from-blue-900  to-gray-900 footer">
      
    
<footer class=" rounded-lg shadow md:hidden  dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        <div
        className=" justify-center ml-auto mr-auto group text-white w-fit px-6 py-3 my-5 mb-10 flex hover:scale-110 duration-500 items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 cursor-pointer">
                      <a
              href= {resume}
              className="flex justify-between items-center w-full text-white"
              download={true}
              target="_blank"
              rel="noreferrer"
            >
            Download Resume
            </a>

        
      </div>
            <ul class="flex justify-center flex-wrap space-x-8 items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://www.linkedin.com/in/manu-sai-5a3b8b257/" class="mr-4 hover:underline md:mr-6 ">Linked In<FaLinkedin size={30} /></a>
                </li>
                <li>
                    <a href="https://github.com/Manu839" class="mr-4 hover:underline md:mr-6">Github <FaGithub size={30} /></a>
                </li>
                <li>
                    <a href= "mailto:2003manusai@gmail.com" class="mr-4 hover:underline md:mr-6 ">Mail <HiOutlineMail size={30}/></a>
                </li>

            </ul>
        </div>
    </div>
</footer>
    
    <span class="text-white">Thanks for visiting </span>
      <br></br>
      <a class="link-underline text-white font-bold" href="/">
        Manu Sai
      </a>
    </div>
  );
}

export default Footer;
