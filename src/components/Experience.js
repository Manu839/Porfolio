import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import tailwind from "../assets/tailwind.png";
import boot from "../assets/bootstrap.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import Section from "./Section";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "hover:shadow-orange-700",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "hover:shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "hover:shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "ReactJs",
      style: "hover:shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "hover:shadow-green-400",
    },

    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "hover:shadow-gray-400",
    },
    {
      id: 9,
      src: java,
      title: "Java",
      style: "hover:shadow-orange-400",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind css",
      style: "hover:shadow-sky-400 py-5",
    },
    {
      id: 11,
      src: boot,
      title: "Bootstrap",
      style: "hover:shadow-purple-500",
    },
    {
      id: 12,
      src: python,
      title: "Python",
      style: "hover:shadow-yellow-300",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b font-DMSans from-blue-900 via-slate-900 to-gray-900 w-full h-screen experience md:pt-[550px] pt-[500px]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-5xl font-Lobster hover:border-cyan-400 duration-300 font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-gray-300">
            These are the technologies I've worked with and used them in my
            projects.
          </p>
        </div>
        <Section>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Experience;
