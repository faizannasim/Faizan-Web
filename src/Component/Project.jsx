import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// Projects data
const projects = {
  name: "Projects",
  section: [
    {
      id: 1,
      name: "Netflix Frontend Clone",
      technologies: "React & Tailwind CSS",
      image: "/soes.png",
      video: "/netflix vid.mp4",
      github: "", // add link here
      demo: "#"
    },
    {
      id: 2,
      name: "Trendy Trinkets Frontend",
      technologies: "React & Tailwind CSS",
      image: "/calculator.png",
      video: "/Trend.mp4",
      github: "https://github.com/faizannasim/TrendyTrinkets",
      demo: "https://trendytrinketss.netlify.app/"
    },
    {
      id: 3,
      name: "Personal Portfolio",
      technologies: "React & Tailwind CSS",
      image: "/new video.mp4",
      video: "/new video.mp4",
      github: "https://github.com/faizannasim/faizan",
      demo: "#"
    },
    {
      id: 4,
      name: "Todo List",
      technologies: "React, Tailwind CSS",
      image: "/soes.png",
      video: "/todoooo.mp4",
      github: "https://github.com/faizannasim/Todo-list", // add link here
      demo: "https://todo-list-nl72-git-main-faizannasims-projects.vercel.app/"
    },
    {
      id: 5,
      name: "Chandigarh University UI Clone",
      technologies: "React & Tailwind CSS",
      image: "/Chandigarh.mp4",
      video: "/Chandigarh.mp4",
      github: "https://github.com/faizannasim/chandigarh-university",
      demo: "https://chandigarh-university-git-main-faizannasims-projects.vercel.app/"
    },
    {
      id: 6,
      name: "Furniro Figma UI Clone",
      technologies: "React & Tailwind CSS",
      image: "/dr.mp4",
      video: "/dr.mp4",
      github: "#", // add link here
      demo: "#"
    },
    {
      id: 7,
      name: "Secure Login & Registration",
      technologies: "React, Tailwind CSS & API Integration",
      image: "/login.mp4",
      video: "/login.mp4",
      github: "https://github.com/faizannasim/LoginAuth",
      demo: "https://login-auth-wine.vercel.app/"
    }
  ]
};

const Project = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          {projects.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.section.map(project => (
            <div
              key={project.id}
              className="p-6 rounded-3xl bg-white/10 border border-white/10 shadow-md hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-48 object-cover rounded-md border border-white/20 mb-4"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-md border border-white/20 mb-4"
                />
              )}

              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.technologies}</p>

              <div className="flex gap-3 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm font-medium hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
                >
                  <FaGithub /> GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium hover:from-blue-400 hover:to-indigo-400 transition-all duration-300"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
