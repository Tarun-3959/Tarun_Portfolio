import React from "react";
import { Download, ArrowDown } from "lucide-react";
import MY_PIC from "../assets/my-pic.jpeg";
const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1eG_veAW2ssmIDw1IPS5vpHwshjqCFTw2/view?usp=drive_link";
    link.target = "_blank";
    link.click();
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            {/* <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
              <img
                src={MY_PIC}
                alt="Professional Profile"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tarun Kushwaha
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-400 mb-8 font-medium">
            Full Stack Web Developer
          </h2>

          {/* Introduction */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate Full Stack Web Developer with expertise in React.js &
            Node.js, building user-friendly and scalable web applications
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownloadResume}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg flex items-center space-x-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={20} />
              <span className="text-lg">Download Resume</span>
            </button>
            <button
              onClick={scrollToAbout}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="text-lg">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
