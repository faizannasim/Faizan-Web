import React from "react";
const AboutImage = "/faizann.png"; // ✅ Correct usage of public image


const port = {
  name: "About me",
  section: [
    {
      image: "AboutImage",
      paragraph:
        "I am a passionate full-stack developer with a strong skill set in design and problem-solving. Proficient in HTML5, CSS, JavaScript, and React.js, I strive to create visually appealing and interactive user interfaces. With a disciplined approach, I excel in writing clean code and optimizing performance. I am adept at collaborating in team environments and enthusiastic about leveraging frameworks like React.js to build dynamic web applications. As a motivated professional, I bring a combination of creativity and technical expertise to deliver exceptional front-end solutions.",
      skills: [
        { name: "HTML & CSS", percent: "90%" },
        { name: "JavaScript", percent: "75%" },
        { name: "Tailwind", percent: "80%" },
        { name: "MySQL", percent: "70%" },
        { name: "ReactJS", percent: "60%" },
      ],
      experience: "Fresher",
      project: "7",
    },
  ],
};

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">{port.name}</h2>
        {port.section.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center md:space-x-12">
            <img
              src={AboutImage}
              alt="About"
              className="w-72 h-[450px] rounded object-cover mb-8 md:mb-0"
            />
            <div className="flex-1">
              <p className="text-lg mb-8">{section.paragraph}</p>
              <div className="space-y-4">
                {section.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <label htmlFor={skill.name} className="w-2/12">
                      {skill.name}
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105"
                        style={{ width: skill.percent }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-between text-center">
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                    {section.experience}
                  </h3>
                  <p>Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                    {section.project}
                  </h3>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
