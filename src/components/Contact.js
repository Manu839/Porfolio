import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Section from "./Section";
//function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  const [nav, setNav] = useState(false);

  return (
    <div
      name="contact"
      className="contact w-full font-DMSans  bg-gradient-to-b from-gray-900 via-slate-900 to-blue-900 p-4 text-white pt-[450px]"
    >
      <div
        className=" justify-center ml-auto mr-auto group text-white w-fit px-6 py-3 my-5 mb-10 flex hover:scale-110 duration-500 items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 cursor-pointer"
        onClick={() =>
          setTimeout(() => {
            setNav(!nav);
          }, 200)
        }
      >
        Contact Me
        <span className="group-hover:rotate-90 duration-300">
          <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
        </span>
      </div>
      {nav && (
        <Section>
          <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
              <p className="text-5xl font-Lobster hover:border-cyan-400 duration-300 font-bold inline border-b-4 border-gray-500">
                Get in touch
              </p>
            </div>

            <div className=" flex justify-center items-center">
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                //action="https://formspree.io/f/mrgwbnaj"
                action="https://getform.io/f/e372a7df-c2e8-4714-a1f1-7cb6dda8c44b"
                className=" flex flex-col w-full md:w-1/2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="p-2 bg-transparent border-2 rounded-md text-cyan-500 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-cyan-500 focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  required
                  className="p-2 bg-transparent border-2 rounded-md text-cyan-500 focus:outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Section>
      )}
    </div>
  );
};

export default Contact;
