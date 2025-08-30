import React from "react";

const Skills = () => {
  return (
    <div className="max-w-3xl mx-auto text-white mt-7">
      <h1 className="text-[#F0EBD8] text-4xl md:text-6xl text-center font-merriweather mb-8">
        Maybe Working with you in Future.
      </h1>
      <div className="mt-7 gap-3 text-xl flex flex-col font-roboto">
        <div>
          <span className="font-bold text-zinc-600 pr-4">Languages:</span>
          JavaScript, TypeScript, Python, C++, HTML/CSS
        </div>
        <div>
          <span className="font-bold text-zinc-600 pr-4">Frameworks:</span>
          React, Node.js, Express.js, Next.js, Tailwind CSS
        </div>
        <div>
          {" "}
          <span className="font-bold text-zinc-600 pr-4">Database:</span>
          MongoDB, Redis
        </div>
        <div>
          <span className="font-bold text-zinc-600 pr-4">Tools: </span>
          Git, GitHub, VS Code, Postman, Figma
        </div>
        <div>
          <span className="font-bold text-zinc-600 pr-4">DevOps:</span>
          GitHub WorkFlow(CI/CD)
        </div>
      </div>
    </div>
  );
};

export default Skills;
