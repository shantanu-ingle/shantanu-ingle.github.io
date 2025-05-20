import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section className="min-h-screen pt-24 pb-10 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center">
      <motion.div
        className="md:w-1/3 text-center mb-8 md:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-48 h-48 rounded-full mx-auto mb-4 bg-very-dark-purple flex items-center justify-center border-4 border-purple-accent shadow-lg hover:scale-105 transition-transform">
          <span className="text-gray-300 text-xl">Profile</span>
        </div>
        <h2 className="text-2xl font-bold text-purple-light">Shantanu Ingle</h2>
        <h3 className="text-lg font-semibold text-purple-light mt-4">Education</h3>
        <p className="text-gray-300 text-sm mt-2">
          B.Tech, Computer Science and Engineering<br />
          Shri Ramdeobaba College of Engineering and Management, Nagpur<br />
          2022–2026, 3rd Year<br />
          CGPA: 9.34
        </p>
      </motion.div>
      <motion.div
        className="md:w-2/3 max-w-3xl backdrop-blur-sm bg-card-bg p-8 rounded-lg shadow-xl"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
        <p className="text-gray-300 text-base">
          Calm and consistent Computer Science student with strong problem-solving skills and a passion for Machine Learning and Deep Learning. Experienced in academic projects, both individually and in teams, with proven leadership. Highly punctual, obedient, and committed to delivering quality results. My interests lie in leveraging ML and DL to solve real-world problems, exploring innovative algorithms and architectures.
        </p>
      </motion.div>
    </section>
  );
}