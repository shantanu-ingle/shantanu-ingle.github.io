import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="bg-gray-900/80 backdrop-blur-sm p-4 fixed w-full top-0 z-10 shadow-lg"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-indigo-900/90 rounded-full py-3 px-8 shadow-md">
          <div className="flex justify-between items-center">
            <NavLink to="/" className="text-2xl font-bold text-gray-100 hover:text-indigo-300 transition">
              Shantanu Ingle
            </NavLink>
            
            {/* Navigation Links with inline-block to force spacing */}
            <div className="text-gray-100 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-block mr-4 hover:text-indigo-300 transition py-2 px-4 rounded-full ${
                    isActive ? 'text-indigo-300 bg-indigo-950/50' : ''
                  }`
                }
              >
                About Me
              </NavLink>
              
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `inline-block mr-4 hover:text-indigo-300 transition py-2 px-4 rounded-full ${
                    isActive ? 'text-indigo-300 bg-indigo-950/50' : ''
                  }`
                }
              >
                Projects
              </NavLink>
              
              <a 
                href="/cv.pdf" 
                className="inline-block hover:text-indigo-300 transition py-2 px-4 rounded-full"
                target="_blank" 
                rel="noopener noreferrer"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}