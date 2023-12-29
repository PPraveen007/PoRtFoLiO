import React, { useState, useEffect, useMemo } from "react";
import SexyImg from "../assets/sextasfuck.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const colors = ["#64B5F6", "#81C784", "#FFB74D"];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedSkill, setDisplayedSkill] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  const skills = useMemo(
    () => ["MERN Stack Developer", "ML Developer", "Python Developer"],
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (letterIndex < skills[currentSkillIndex].length) {
        setDisplayedSkill(
          (prevSkill) => prevSkill + skills[currentSkillIndex][letterIndex]
        );
        setLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setLetterIndex(0);
          setDisplayedSkill("");
          setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        },400); // Delay after displaying the full skill
      }
    }, 50); // Adjust the interval duration as needed for faster transitions

    return () => clearInterval(intervalId);
  }, [currentSkillIndex, letterIndex, skills]);

  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black to-gray-800 pt-8 p-4 text-white"
    >
      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto min-h-screen md:flex-row">
        <div className="flex flex-col justify-center pt-8 md:w-1/2  md:ml-8">
          <h2
            className="text-4xl font-bold text-white"
            style={{ color: colors[currentSkillIndex] }}
          >
            I'm a {displayedSkill}
          </h2>
          <p className="text-gray-500 py-10 max-w-xl text-justify ">
            MERN Stack Developer, crafting innovative web solutions. Expert in
            React.js, Tailwind CSS, Express.js, Node.js and MongoDB. Passionate
            about creating user-friendly, visually appealing experiences. Let's
            collaborate to turn your ideas into reality! Explore my portfolio,
            and feel free to reach out—I'm eager to take on new challenges and
            contribute to exciting projects.
          </p>

          <div className="pb-5">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <img
            src={SexyImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-4/5 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
