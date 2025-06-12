import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (placeholder for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! (This is a placeholder - integrate with a backend for real submission)');
    console.log('Form Data:', formData);
    setFormData({ name: '', email: '', message: '' }); // Reset form
    setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
  };

  // Toggle form visibility with slide-down animation
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <section className="min-h-screen pt-28 pb-10 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-950">
      <motion.div
        className="md:w-1/3 text-left mb-8 md:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-48 h-48 rounded-full mb-4 bg-purple-950 flex items-center justify-center border-4 border-purple-400 shadow-lg hover:scale-105 transition-transform ml-0">
          <span className="text-purple-100 text-xl font-semibold">Profile</span>
        </div>
        <h2 className="text-2xl font-bold text-purple-300">Shantanu Ingle</h2>
        <h3 className="text-lg font-semibold text-purple-400 mt-4">Education</h3>
        <p className="text-purple-200 text-sm mt-2">
          <span className="block">B.Tech, Computer Science and Engineering</span>
          <span className="block">Shri Ramdeobaba College of Engineering and Management, Nagpur</span>
          <span className="block">2022-2026, 3rd Year</span>
          <span className="block font-medium">CGPA: 9.34</span>
        </p>
        {/* Social Media Handles */}
        <motion.div
          className="mt-6 flex space-x-4 ml-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/shantanu-ingle-b161a4288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-200 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shantanu-ingle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-200 transition-colors duration-300"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="md:w-2/3 max-w-3xl backdrop-blur-sm bg-purple-900/30 p-8 rounded-lg shadow-xl border border-purple-700/50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-purple-100 mb-6">About Me</h1>
        <p className="text-purple-200 text-base mb-6">
          Calm and consistent Computer Science student with strong problem-solving skills and a passion for Machine Learning and Deep Learning. Experienced in academic projects, both individually and in teams, with proven leadership. Highly punctual, obedient, and committed to delivering quality results. My interests lie in leveraging ML and DL to solve real-world problems, exploring innovative algorithms and architectures.
        </p>

        {/* Certifications Container */}
        <motion.div
          className="mt-8 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-purple-300 mb-4">Certifications</h3>
          <div className="space-y-4">
            <motion.a
              href="https://www.credly.com/users/shantanu-ingle.bed6982a"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-purple-900/30 p-4 rounded-lg text-purple-200 hover:bg-purple-900/50 transition-colors duration-300"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Certifications Portfolio on Credly
            </motion.a>
            <motion.a
              href="https://coursera.org/verify/9C54QIYC0D53"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-purple-900/30 p-4 rounded-lg text-purple-200 hover:bg-purple-900/50 transition-colors duration-300"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              GANs Specialization (DeepLearning.AI)
            </motion.a>
            <motion.a
              href="https://coursera.org/verify/professional-cert/05G9S4VSTI1C"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-purple-900/30 p-4 rounded-lg text-purple-200 hover:bg-purple-900/50 transition-colors duration-300"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Google Data Analytics (Coursera)
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Me Button (Smaller and Subtle) */}
        <motion.button
          className="w-auto bg-purple-800 hover:bg-purple-700 text-purple-100 py-1 px-4 rounded-md text-sm transition-colors duration-300 font-medium"
          onClick={toggleForm}
          initial={{ y: 0 }}
          animate={{ y: isFormVisible ? 0 : 0 }}
          whileHover={{ scale: 1.03 }}
        >
          Contact Me
        </motion.button>

        {/* Contact Form (Slide Down Animation) */}
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isFormVisible ? 'auto' : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="mt-6 pt-4">
            {status && <p className="text-purple-100 mb-4">{status}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-purple-200 text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-purple-800/50 border border-purple-700 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-purple-200 text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-purple-800/50 border border-purple-700 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-purple-200 text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 bg-purple-800/50 border border-purple-700 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}