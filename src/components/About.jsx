import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full min-h-screen">
        <div className="pb-1 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl md:mt-8">
          I am a seasoned professional in MERN stack development, adept at
          crafting seamless solutions using MongoDB, Express.js, React, and
          Node.js. My proficiency extends beyond basic development; I excel in
          solving intricate challenges and optimizing performance in real-time
          applications. As a quick learner, I stay at the forefront of emerging
          technologies, ensuring that my code remains innovative and scalable.
        </p>

        <br />

        <p className="text-xl">
          In the realm of Python, Machine Learning, Deep Learning, and
          Artificial Intelligence, I am an expert coder with a passion for
          tackling complex problems. My skills aren't limited to coding; I have
          a keen interest in finance, leveraging my expertise to develop
          algorithmic trading strategies and financial models. Additionally, I
          am not just a silent coder – my effective communication skills and
          confidence in public speaking complement my technical prowess, making
          me a well-rounded professional in the industry.
        </p>
      </div>
    </div>
  );
};

export default About;
