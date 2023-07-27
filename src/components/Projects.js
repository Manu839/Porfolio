import React from "react";
import Section from "./Section";
import project6 from "../assets/project6.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project3 from "../assets/project3.png";
import project2 from "../assets/project2.png";
import project12 from "../assets/project12.png";
const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: project12,
      link: "https://newsletter-sign-up-form-with-success-message-amber.vercel.app/",
      repo: "https://github.com/Manu839/Newsletter-sign-up-form-with-success-message",
    },
    {
      id: 2,
      src: project2,
      link: "https://sunnyside-agency-landing-page-manu839.vercel.app/",
      repo: "https://github.com/Manu839/Sunnyside-agency-landing-page",
    },
    {
      id: 3,
      src: project3,
      link: "https://text-converter-nine.vercel.app/",
      repo: "https://text-converter-nine.vercel.app/",
    },
    {
      id: 4,
      src: project4,
      link: "advice-generator-app-manu839.vercel.app",
      repo: "https://github.com/Manu839/Advice-generator-app",
    },
    {
      id: 5,
      src: project5,
      link: "https://my-calculator-lilac.vercel.app/",
      repo: "https://github.com/Manu839/My-calculator",
    },
    {
      id: 6,
      src: project6,
      link: "easybank-landing-page2-kappa.vercel.app",
      repo: "https://github.com/Manu839/Easybank-landing-page2",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b font-DMSans from-gray-900 via-slate-900 to-blue-900 w-full pt-24 md:pt-48 text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-Lobster  hover:border-cyan-400 duration-300 font-bold inline border-b-4 border-gray-500">
            I build & design stuff
          </p>
          <p className="py-6 text-gray-300">Check out some of my work</p>
        </div>
        <Section>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, link, repo }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 hover:shadow-white rounded-lg"
              >
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Demo
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(repo, "_blank")}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Projects;
