import React from "react";
import Section from "./Section";
const About = () => {
  return (
    <div
      name="about"
      className="w-full font-DMSans h-100 bg-gradient-to-b  from-blue-900 via-slate-900 to-gray-900 text-white md:pt-0 pt-24 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="font-bold font-Lobster text-5xl inline border-b-4 hover:border-cyan-500 border-gray-500 border-[lenth:0%] hover:border[length:100%] duration-500 transition-all ease-out">
            About
          </p>
        </div>
        <Section>
          <p className="text-xl mt-5 text-gray-300">
            My name is Manu Sai and I'm from Raipur Chhattisgarh. I'm currently
            doing my B-tech degree from IIIT Naya Raipur chhattisgarh amd I'm
            really passionate about building products , I'm always looking for
            new ways to learn and improve my skills.
          </p>

          <br />

          <p className="text-xl text-gray-300">
            I am passionate about creating functional and visually appealing
            websites, and I am eager to apply my skills in HTML, CSS, and
            JavaScript to contribute to the success of an organization. <br />{" "}
            <br />
            By continuously expanding my knowledge and staying up-to-date with
            industry trends, I aim to grow as a web developer and make a
            valuable impact in the field.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default About;
