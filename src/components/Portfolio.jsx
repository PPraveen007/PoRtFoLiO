// Portfolio.jsx
import React, { useState } from "react";
import projectDescriptions from "./Description"; // Adjust the path accordingly
import Book_store from "../assets/portfolio/Book_store.png";
import Collage_website from "../assets/portfolio/Collage_website.png";
import Exercise_Tracker from "../assets/portfolio/Exercise_Tracker.png";
import MailRank from "../assets/portfolio/MailRank.png";
import stock_market from "../assets/portfolio/Stock_market.jpg";
import tool from "../assets/portfolio/Tool_for_classification.png";
import Portfolioimg from "../assets/portfolio/Portfolioimg.png";
import Netflix from "../assets/portfolio/Netflix_clone.jpeg";
import feedback from "../assets/portfolio/feedback.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Book Store",
      src: Book_store,
      githubLink: "https://github.com/PPraveen007/Book_Store",
    },
    {
      id: 2,
      name: "Collage Website",
      src: Collage_website,
      githubLink: "https://github.com/PPraveen007/Collage_Website",
    },
    {
      id: 3,
      name: "Exercise Tracker",
      src: Exercise_Tracker,
      githubLink: "https://github.com/PPraveen007/Exercise_tracker",
    },
    {
      id: 4,
      name: "MailRank",
      src: MailRank,
      githubLink: "https://github.com/PPraveen007/Mail_Priotization",
    },
    {
      id: 5,
      name: "SM",
      src: stock_market,
      githubLink: "https://github.com/PPraveen007/Stock_Market_Prediction_with_NN",
    },
    {
      id: 6,
      name: "Automated=ML-Based-Tool",
      src: tool,
      githubLink: "https://github.com/PPraveen007/automated-ML-based-tool",
    },
    {
      id: 7,
      name: "Portfolio",
      src: Portfolioimg,
      githubLink: "https://github.com/PPraveen007/PoRtFoLiO", // Update with the correct link of your porfolio
    },
    
    {
      id: 8,
      name: "FlickWEB",
      src: Netflix,
      githubLink: "https://github.com/PPraveen007/Flickweb",
    },
    {
      id: 9,
      name: "Feedback_system",
      src: feedback,
      githubLink: "https://github.com/your-username/Tool_for_classification",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openGithubLink = (link) => {
    window.open(link, "_blank");
  };

  const openAboutModal = (project) => {
    setSelectedProject(project);
  };

  const closeAboutModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full min-h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-screen-lg mx-auto">
          {portfolios.map(({ id, name, src, githubLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="w-full h-52 object-cover duration-200 hover:scale-105"
              />
              <div className="inset-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-white font-bold text-xl mb-2">{name}</p>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    className="px-6 py-3 bg-gray-800 text-white rounded-md duration-200 hover:scale-105"
                    onClick={() => openAboutModal(id)}
                  >
                    About
                  </button>

                  <button
                    className="px-6 py-3 bg-gray-800 text-white rounded-md duration-200 hover:scale-105"
                    onClick={() => openGithubLink(githubLink)}
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={closeAboutModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white p-4">
                <pre className="text-gray-600 whitespace-pre-line">
                  {projectDescriptions[selectedProject]}
                </pre>
              </div>
              <div className="bg-gray-100 p-4">
                <button
                  onClick={closeAboutModal}
                  className="px-4 py-2 bg-gray-800 text-white rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
