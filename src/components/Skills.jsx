import React from "react";

const Skills = () => {
  return (
    <div className="max-w-3xl mx-auto text-white mt-4 sm:mt-6 md:mt-7 px-2 sm:px-4">
      <h1 className="text-[#F0EBD8] text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-merriweather mb-6 sm:mb-8 leading-tight">
        Maybe Working with you in Future.
      </h1>
      <div className="mt-4 sm:mt-6 md:mt-7 gap-2 sm:gap-3 text-sm sm:text-lg md:text-xl flex flex-col font-roboto space-y-3 sm:space-y-2 md:space-y-0 text-center sm:text-left">
        <div className="leading-relaxed">
          <span className="font-bold text-zinc-600 pr-2 sm:pr-4 inline">Languages:</span>
          <span className="inline">JavaScript, TypeScript, Python, C++, HTML/CSS</span>
        </div>
        <div className="leading-relaxed">
          <span className="font-bold text-zinc-600 pr-2 sm:pr-4 inline">Frameworks:</span>
          <span className="inline">React, Node.js, Express.js, Next.js, Tailwind CSS</span>
        </div>
        <div className="leading-relaxed">
          <span className="font-bold text-zinc-600 pr-2 sm:pr-4 inline">Database:</span>
          <span className="inline">MongoDB, Redis</span>
        </div>
        <div className="leading-relaxed">
          <span className="font-bold text-zinc-600 pr-2 sm:pr-4 inline">Tools:</span>
          <span className="inline">Git, GitHub, VS Code, Postman, Figma</span>
        </div>
        <div className="leading-relaxed">
          <span className="font-bold text-zinc-600 pr-2 sm:pr-4 inline">DevOps:</span>
          <span className="inline">GitHub WorkFlow(CI/CD)</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
