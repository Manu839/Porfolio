import React from "react";
import HeroImage from "../assets/heroimagee.jpg";
import { Link } from "react-scroll";
import Emoji from "react-emoji-render";
import Typewriter from "typewriter-effect";
import Section from "./Section";

const Home = () => {
  return (
    <Section>
      <div
        name="home"
        className="font-DMSans h-screen w-full pt-36 md:pt-0 bg-gradient-to-b from-gray-900 via-slate-900 to-blue-900 home"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="small-screen hidden">
            <img
              src={HeroImage}
              alt="profile"
              className="rounded-2xl mx-auto md:w-2/3 md:h-auto "
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl font-Lobster sm:text-7xl font-bold text-white">
              I'm
              <Typewriter
                options={{
                  strings: ["Manu Sai", "a Front-End Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              With a strong commitment to continuous learning, I aspire to
              contribute my expertise as a web developer to create dynamic and
              interactive web solutions that enhance user engagement and drive
              client success.
            </p>

            <div className="ml-auto mr-auto md:mr-auto md:ml-0">
              <Link
                to="contact"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer"
              >
                Say hello<Emoji className="text-xl">👋</Emoji>
              </Link>
            </div>
          </div>

          <div className="big-screen w-10/12 md:w-6/12 md:ml-auto md:mr-0 h-auto">
            <img
              src={HeroImage}
              alt="profile"
              className="rounded-2xl mx-auto w-auto md:h-auto h-72 md:w-full "
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
