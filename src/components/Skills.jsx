import React from "react";

const Skills = () => {
  return (
    <div className="max-w-3xl mx-auto text-white mt-4 sm:mt-6 md:mt-7 px-2 sm:px-4">
      <h1 className="text-[#F0EBD8] text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-merriweather mb-6 sm:mb-8 leading-tight">
        Maybe Working with you in Future.
      </h1>
      <div className="mt-4 sm:mt-6 md:mt-7 gap-2 sm:gap-3 text-sm sm:text-lg md:text-xl flex flex-col font-roboto space-y-3 sm:space-y-2 md:space-y-0">
        <div className="leading-relaxed">
          <span className="font-bold text-zinc-600 pr-2 sm:pr-4 block sm:inline">Languages:</span>
          <span className="block sm:inline mt-1 sm:mt-0">JavaScript, TypeScript, Python, C++, HTML/CSS</span>
        </div>
        <div className="leading-relaxed">
          <span className="font-bold text-zinc-600 pr-2 sm:pr-4 block sm:inline">Frameworks:</span>
          <span className="block sm:inline mt-1 sm:mt-0">React, Node.js, Express.js, Next.js, Tailwind CSS</span>
        </div>
        <div className="leading-relaxed">
          <span className="font-bold text-zinc-600 pr-2 sm:pr-4 block sm:inline">Database:</span>
          <span className="block sm:inline mt-1 sm:mt-0">MongoDB, Redis</span>
        </div>
        <div className="leading-relaxed">
          <span className="font-bold text-zinc-600 pr-2 sm:pr-4 block sm:inline">Tools:</span>
          <span className="block sm:inline mt-1 sm:mt-0">Git, GitHub, VS Code, Postman, Figma</span>
        </div>
        <div className="leading-relaxed">
          <span className="font-bold text-zinc-600 pr-2 sm:pr-4 block sm:inline">DevOps:</span>
          <span className="block sm:inline mt-1 sm:mt-0">GitHub WorkFlow(CI/CD)</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
