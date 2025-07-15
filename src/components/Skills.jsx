import React from "react";
import JS_IMG from "../assets/js-imgg.png";
import REACT_IMG from "../assets/react-img.png";
import NODE_IMG from "../assets/nodejs-img.png";
//import MONGO_IMG from "../assets/mongo-img.png";
import MONGO_IMG from "../assets/mongodb-img.png";
import EXPRESS_IMG from "../assets/expressjs-img.png";
import TAILWIND_CSS from "../assets/tailwind-img.png";
import REDIS_IMG from "../assets/redis-img.png";
import HTML_IMG from "../assets/html-img.png";
import CSS_IMG from "../assets/css-img.png";

import VS_IMG from "../assets/vs-img.png";
import GITHUB_IMG from "../assets/github-img.png";
import POSTMAN_IMG from "../assets/postman-img.png";

const Skills = () => {
  const techSkills = [
    { name: "Node.js", icon: NODE_IMG },
    { name: "React", icon: REACT_IMG },
    { name: "Tailwind CSS", icon: TAILWIND_CSS },
    { name: "Express.js", icon: EXPRESS_IMG },
    { name: "Redis", icon: REDIS_IMG },
    { name: "MongoDB", icon: MONGO_IMG },
    { name: "HTML", icon: HTML_IMG },
    { name: "CSS", icon: CSS_IMG },
    { name: "JavaScript", icon: JS_IMG },
  ];

  const tools = [
    { name: "VS Code", icon: VS_IMG, description: "Primary Code Editor" },
    { name: "Git & GitHub", icon: GITHUB_IMG, description: "Version Control" },
    { name: "Postman", icon: POSTMAN_IMG, description: "API Testing" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Tech Stack & Tools
          </h2>

          {/* Tech Skills */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-800">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {techSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-purple-50 border-2 border-transparent hover:border-purple-200"
                >
                  <div className="text-4xl mb-3">
                    <img src={skill.icon}></img>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-800">
              Development Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl flex flex-col items-center gap-2 justify-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-200"
                >
                  <div>
                    <img src={tool.icon} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {tool.name}
                  </h4>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
