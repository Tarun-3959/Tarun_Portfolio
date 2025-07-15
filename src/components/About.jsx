import React from "react";
import { Download } from "lucide-react";
import MY_PIC from "../assets/my-pic.jpeg";
const About = () => {
  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1example/view";
    link.target = "_blank";
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Hello, I'm Tarun Kushwaha
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Full Stack Web Developer skilled in building responsive web
                applications using React.js, Node.js, and MongoDB. Proficient in
                developing secure, scalable products with a strong understanding
                of REST APIs and authentication. Eager to learn and solve
                real-world problems through code.
              </p>

              <div className="pt-6">
                <button
                  onClick={handleDownloadResume}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg flex items-center space-x-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Download size={20} />
                  <span className="text-lg">Download Resume</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={MY_PIC}
                    alt="Tarun Kushwaha - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
