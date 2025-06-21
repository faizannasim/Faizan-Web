import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const contact = {
  name: "Contact Me",
  section: [
    {
      name: "Let's Talk", // Emoji removed from here
      description: "I'm open to discussing web development projects or partnership opportunities.",
      link: "faizannasim59@gmail.com",
      number: "7532053343",
      location: "Delhi",
      button: "Send",
    }
  ]
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    emailjs.init("q-HvseK2-sN1t1rIW"); // Initialize with your public key
  }, []);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError('');

    const serviceId = "service_r5ltc7c";     
    const templateId = "template_l16f2kn";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "faizan",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setShowAlert(true);
        setAlertMessage("✅ Email sent successfully!");
        setTimeout(() => setShowAlert(false), 3000);
      })
      .catch((error) => {
        console.error("Email send error:", error);
        setShowAlert(true);
        setAlertMessage("❌ Failed to send email. Please try again.");
        setTimeout(() => setShowAlert(false), 3000);
      });
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text text-white">{contact.name}</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Info */}
          {contact.section.map((section, index) => (
            <div key={index} className="flex-1">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 flex items-center">
                <img src={section.image} alt="Let's Talk" className="w-16 h-16 rounded-full mr-4" />
                {section.name} {/* No emoji */}
              </h3>
              <p className="text-lg mb-6">{section.description}</p>
              <div className="mb-4">
                <FaEnvelope className="inline-block text-green-400 mr-2" />
                <a href={`mailto:${section.link}`} className="text-gray-300 hover:text-green-400">
                  {section.link}
                </a>
              </div>
              <div className="mb-4">
                <FaPhone className="inline-block text-green-400 mr-2" />
                <span>{section.number}</span>
              </div>
              <div className="mb-4">
                <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
                <span>{section.location}</span>
              </div>
            </div>
          ))}

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-lg font-semibold">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg font-semibold">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your email"
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>
              <div>
                <label className="block mb-2 text-lg font-semibold">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  rows="5"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                {contact.section[0].button}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Alert */}
      {showAlert && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black px-6 py-4 rounded shadow-lg text-lg font-semibold">
            {alertMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
