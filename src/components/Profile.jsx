import React from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p- md:p-5 transform  transition-all duration-500 hover:shadow-cyan-500/10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
        {/* Profile Image Section - Left Side */}
        <div className="flex-shrink-0 md:self-start">
          <div className="relative rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
            <img
              src={assets.pic2}
              alt="Profile"
              className="w-40 h-40 md:w-40 md:h-40 rounded-full object-cover object-center shadow-2xl ring-4 ring-slate-800 transition-all duration-300"
            />
          </div>
        </div>

        {/* Content Section - Right Side */}
        <div className="flex-1 text-center md:text-left space-y-2">
          <div className="flex gap-4 text-center items-center">
            <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold bg-[#F0EBD8] bg-clip-text text-transparent leading-tight font-merriweather">
              Abhishek Chauhan
            </h1>
            <button 
              className="sm:h-fit h-[25px] select-none transition-all hover:pt-[0.15rem] hover:border-b-4 border-red-800 bg-red-400 duration-100 cursor-grab text-[#F0EBD8] text-xs px-2 py-1 rounded-full mt-1 md:mt-0"
            >
              Open for Work
            </button>
          </div>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-roboto">
            A Full Stack Developer
          </p>
          <div className="flex gap-2">
            <div className="button-3d">
              <button className="button-3d-link"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "mailto:abhishekchauhan01x@gmail.com";
                link.click();
              }}>Schedule a Call</button>
            </div>
            <div className="resume">
              <button
                className="resume-button"
                onClick={() => window.open(assets.resume, "_blank")}
              >
                Resume
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <button
              className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-colors duration-300 border border-slate-600/30 hover:border-slate-500/50"
              onClick={() =>
                window.open("https://github.com/abhishekchauhan01x", "_blank")
              }
            >
              <img
                src={assets.github}
                alt="GitHub"
                className="w-6 h-6 filter invert"
              />
            </button>
            <button
              className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-colors duration-300 border border-slate-600/30 hover:border-slate-500/50"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "mailto:abhishekchauhan01x@gmail.com";
                link.click();
              }}
            >
              <img
                src={assets.mail}
                alt="Email"
                className="w-6 h-6 filter invert"
              />
            </button>
            <button
              className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-colors duration-300 border border-slate-600/30 hover:border-slate-500/50"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/abhishek-chauhan-9a7986299/",
                  "_blank"
                )
              }
            >
              <img
                src={assets.linkedln}
                alt="LinkedIn"
                className="w-6 h-6 filter invert"
              />
            </button>
            <button
              className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-colors duration-300 border border-slate-600/30 hover:border-slate-500/50"
              onClick={() => window.open("https://wa.me/9555724835", "_blank")}
            >
              <img
                src={assets.whatsapp}
                alt="WhatsApp"
                className="w-6 h-6 filter invert"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
