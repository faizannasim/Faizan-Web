import React from 'react';

const services = {
  name: "Services",
  section: [
    {
      id: 1,
      title: "Web Design",
      Description: "Creating visually appealing, user-friendly, and responsive website designs tailored to your brand and goals.",
      link: "#"
    },
    {
      id: 2,
      title: "Frontend Development",
      Description: "Building responsive, high-performance UIs using modern JavaScript frameworks like React.",
      link: "#"
    },
    {
      id: 3,
      title: "Full Stack Development",
      Description: "Combining frontend and backend technologies to build full-fledged, scalable web applications.",
      link: "#"
    },
  ]
}

const Service = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          {services.name}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.section.map(section => (
            <div
              key={section.id}
              className="p-6 rounded-3xl bg-white/10 border border-white/10 shadow-xl hover:shadow-blue-500/30 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                {`0${section.id}`}
              </div>
              <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
              <p className="text-gray-300 mb-6">{section.Description}</p>
              <a
                href={section.link}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-400 hover:to-indigo-400 hover:scale-105 transition-transform duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
