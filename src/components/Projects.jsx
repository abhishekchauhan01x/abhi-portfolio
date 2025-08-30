import React from 'react'
import { assets } from '../assets/assets';

const Projects = () => {
  const projects = [

    {
      id: 1,
      title: "Alverge AI",
      description: "A full-stack AI chatbot application with authentication, conversation management, and modern UI, built with React (Vite) frontend and Node.js/Express backend.",
      technologies: ["React", "TailwindCSS", "Firebase", "Node.js", "Express", "MongoDB", "Groq SDK"],
      viewProject: "https://alverge-ai-p5g7.vercel.app/",
      sourceCode: "https://github.com/abhishekchauhan01x/AlvergeAI"
    },
    {
      id: 2,
      title: "MediSync",
      description: "A full-stack medical appointment booking platform with separate panels for users, doctors, and admins. Built with React (frontend), Node.js/Express (backend), and MongoDB.",
      technologies: ["React",  "TailwindCSS", "Axios", "Node,js", "Express.js", "MongoDB", "JWT"],
      viewProject: "https://medi-sync-dusky.vercel.app/",
      sourceCode: "https://github.com/abhishekchauhan01x/MediSync"
    },
    {
      id: 3,
      title: "LinkForge",
      description: "LinkForge is a modern, high-performance URL shortener built with Next.js and MongoDB. It provides a seamless, privacy-focused solution for creating shortened URLs without requiring user registration or collecting personal information.",
      technologies: ["Next.js", "React", "TailwindCSS", "MongoDB", "OpenWeather"],
      viewProject: "https://linkforge-nine.vercel.app/",
      sourceCode: "https://github.com/abhishekchauhan01x/linkforge"
    }
  ];

  return (
    <div className="py-1 sm:py-2 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-[#F0EBD8] bg-clip-text text-transparent font-merriweather">
        Projects
      </h2>
      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
        <div className='flex flex-col gap-4 sm:gap-5 md:gap-6'>
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50 p-4 sm:p-5 md:p-6"
          >
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-merriweather group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-3 sm:mb-4 font-roboto">
              {project.description}
            </p>
            
            {/* Technology Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium bg-slate-700/70 text-slate-300 rounded-md border border-slate-600/30 hover:bg-slate-600/70 hover:text-cyan-300 transition-colors duration-200 font-roboto"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <button
                onClick={() => window.open(project.viewProject, '_blank')}
                className="flex items-center justify-center sm:justify-start gap-2 text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 font-roboto group/btn py-2 sm:py-0"
              >
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Project
              </button>
              <button
                onClick={() => window.open(project.sourceCode, '_blank')}
                className="flex items-center justify-center sm:justify-start gap-2 text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 font-roboto group/btn py-2 sm:py-0"
              >
                <img
                  src={assets.github}
                  alt="GitHub"
                  className="w-4 h-4 filter invert group-hover/btn:scale-110 transition-transform duration-200"
                />
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects