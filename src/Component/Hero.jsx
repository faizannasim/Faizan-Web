import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
   <div>
  {/* Marquee at the top */}



      {/* Main Hero Section */}
      <div className="bg-black text-white text-center py-16">
        <div className="relative w-56 h-56 mx-auto mb-8 rounded-full border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-float transition-transform duration-300 hover:scale-110">
          <img 
            src="/fzn.png" 
            alt="Faizan Nasim"  
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-400 animate-pulse pointer-events-none"></div>
        </div>

        <h1 className="text-4xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Faizan Nasim</span>
          , Full-Stack Developer
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          I specialize in building modern and responsive websites.
        </p>

        <div className="mt-8 space-x-4">
          <a 
            href="mailto:faizannasim59@gmail.com"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hidden md:inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded"
          >
            Contact Me
          </a>

          <a 
            href="https://drive.google.com/file/d/1yU_sF6mGuYx_NSZ74s5_WCPXb0InBePY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white hidden md:inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
