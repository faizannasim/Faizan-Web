import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const footer = {
  name: "Faizan nasim",
  section: [
    {
      description: "Full-stack developer based in Delhi, specializing in modern web applications.",
      mail: "Your Email",
      button: "Subscribe"
    }
  ],
  menu: {
    info: "Faizan Nasim. All rights reserved.",
    twitter: "https://x.com/FaizanNasim8",
    linkedin: "https://www.linkedin.com/in/faizan-nasim-2262a930a/",
    git: "https://github.com/faizannasim",
    linkone: "Privacy",
    link: "Terms of Service"
  }
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-12 mb-10">
          {/* Left Side */}
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              {footer.name}
            </h3>
            {footer.section.map((section) => (
              <p key={section.description} className="text-gray-400">
                {section.description}
              </p>
            ))}
          </div>

          {/* Right Side - Subscribe */}
          <div className="w-full md:w-[400px] backdrop-blur-sm bg-white/5 p-4 rounded-2xl shadow-lg border border-white/10">
            {footer.section.map((section) => (
              <form key={section.mail} className="flex">
                <input
                  type="email"
                  placeholder={section.mail}
                  className="w-full p-3 rounded-l-lg bg-black/60 border border-gray-700 text-white placeholder-gray-400 
                  focus:outline-none focus:border-green-400 transition-all"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:brightness-110 transition-all"
                >
                  {section.button}
                </button>
              </form>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {footer.menu.info}
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5">
            <a
              href={footer.menu.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition-transform duration-300 text-gray-400 hover:text-green-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={footer.menu.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition-transform duration-300 text-gray-400 hover:text-blue-400"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={footer.menu.git}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition-transform duration-300 text-gray-400 hover:text-white"
            >
              <FaGithub size={20} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {footer.menu.linkone}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {footer.menu.link}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
