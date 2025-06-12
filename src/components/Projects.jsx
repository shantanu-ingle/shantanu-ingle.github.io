import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Audio Separation with Notes, Tempo, and Key Detection",
    idea: "A system to separate audio into vocals, bass, drums, and other components, while detecting musical attributes like notes, tempo, and key for music analysis.",
    need: "Enables music production, karaoke, and analysis by providing clean audio stems and musical insights, addressing issues like vocal leakage.",
    tech: "Python, Flask, PyTorch, Demucs, Open-Unmix, Librosa, Plask",
    models: "U-Net-based Demucs for audio separation, spectrogram analysis with Librosa for tempo and key detection, post-processing for quality enhancement.",
    implementation: "Built a Flask backend to process audio files, separate tracks using Demucs, and analyze tempo/key with Librosa. Plask integrated for motion visualization. Frontend displays separated tracks and musical attributes.",
    link: "https://github.com/shantanu-ingle/Stemify-Audio_Separation_App",
    images: ["stemify-image1.png", "stemify-image2.png", "stemify-image3.png", "stemify-image4.png", "stemify-image5.png"],
  },
  {
    title: "Ensemble Learning for Fundus Image Disease Detection",
    idea: "Detect eye diseases like diabetic retinopathy from retinal fundus images using an ensemble of deep learning models.",
    need: "Early diagnosis of eye diseases, improving precision in medical imaging analysis.",
    tech: "Python, PyTorch, Albumentations, Scikit-learn, Pandas",
    models: "Ensemble of ResNet, EfficientNet, and DenseNet with focal loss and threshold tuning for multi-label classification.",
    implementation: "Preprocessed fundus images, applied augmentations, trained ensemble models, and evaluated metrics like precision and recall. Optimized for high recall/low precision issues.",
    link: "https://github.com/shantanu-ingle/fundus-ensemble-detector",
    images: ["Ensemble-fundus-prediction-image1.png", "Ensemble-fundus-prediction-image2.png"],
  },
  {
    title: "IPL Match Win Prediction",
    idea: "Predict the outcome of IPL matches (win/loss) using historical match data, player statistics, and match conditions.",
    need: "Provide accurate predictions for fans, teams, and analysts to enhance engagement and strategic decision-making in cricket.",
    tech: "Python, Django, React, FastAPI, scikit-learn, XGBoost, pandas, numpy",
    models: "Ensemble learning with XGBoost as the primary model, combined with Random Forest and Gradient Boosting for improved accuracy.",
    implementation: "Developed a Django backend to manage data and serve the web app, with a React frontend for user interaction. FastAPI provided a RESTful API for real-time predictions. Preprocessed IPL datasets by cleaning null values and encoding categorical features (e.g., teams, venues). Trained an XGBoost-based ensemble model on features like team performance, player stats, and match conditions, achieving robust predictive performance.",
    link: "https://github.com/shantanu-ingle/IPL-prediction_v2",
    images: ["ipl-prediction-image1.png", "ipl-prediction-image2.png", "ipl-prediction-image3.png", "ipl-prediction-image4.png", "ipl-prediction-image5.png"],
  },
  {
    title: "Profanity Beeping in Videos",
    idea: "Automatically detect and censor profanity in video audio by overlaying beeps.",
    need: "Content moderation for family-friendly or professional video content.",
    tech: "Python, Librosa, SpeechRecognition, MoviePy",
    models: "Speech-to-text for profanity detection, audio editing for beep overlay.",
    implementation: "Extracted video audio, transcribed with SpeechRecognition, identified profanity using a predefined list, overlaid beeps with MoviePy, and recompiled the video.",
    link: "https://github.com/shantanu-ingle/Video-Profanity-Beep-Editor-App",
    images: ["Video-profanity-beep-editor-image1.png", "Video-profanity-beep-editor-image2.png"],
  },
  {
    title: "Scheduling and Summarizing App",
    idea: "Summarize events from text and schedule them in Google Calendar with name, date, and time.",
    need: "Automate event management and summarization for improved productivity.",
    tech: "Python, Google Calendar API, spaCy, Transformers",
    models: "BART for text summarization, Google API for calendar integration.",
    implementation: "Parsed input text with spaCy, summarized events using BART, authenticated with Google API, and added events to Calendar.",
    link: "https://github.com/shantanu-ingle/SchedulingApp",
    images: ["Scheduling-app-image1.png", "Scheduling-app-image2.png", "Scheduling-app-image3.png"],
  },
  {
    title: "Fitness App",
    idea: "A web application designed to help users create personalized workout plans and explore a library of exercises.",
    need: "Helps users monitor exercise routines and improve fitness levels with data-driven recommendations.",
    tech: "Next.js, React, TypeScript, Axios, Express.js, Mongoose, MongoDB",
    models: "LSTM-based model for predicting workout effectiveness, integrated with a REST API.",
    implementation: "Developed a Next.js frontend and an Express.js backend with MongoDB, trained an LSTM model on fitness data, and implemented real-time tracking. Deployed frontend on Vercel, backend locally/server-side.",
    link: "https://github.com/shantanu-ingle/Fitness-app-public",
    images: ["Fitness-app-image1.png","Fitness-app-image3.png","Fitness-app-image4.png","Fitness-app-image6.png"],
  },
  {
    title: "Tumor Detection Using MRI Images",
    idea: "Identify tumors in brain MRI scans using deep learning for accurate medical diagnosis.",
    need: "Precise tumor detection to assist radiologists in treatment planning.",
    tech: "Python, PyTorch, torchvision, OpenCV",
    models: "Convolutional Neural Networks, U-Net for tumor segmentation.",
    implementation: "Preprocessed MRI scans, trained CNNs for classification and U-Net for segmentation, tested on medical datasets for accuracy.",
    link: "#",
    images: [],
  },
  {
    title: "Weather App",
    idea: "A full-stack weather application providing real-time weather data, 5-day forecasts, geolocation support, air quality, and historical weather search management with interactive weather maps.",
    need: "Provides users with accurate weather information for planning daily activities.",
    tech: "React, TypeScript, TailwindCSS v4, Vite, Node.js, Express, MongoDB, Chart.js, react-chartjs-2, Leaflet, react-leaflet, Axios, File-saver",
    models: "No ML models; relies on API data processing and caching.",
    implementation: "Built a React frontend with Vite, a Node.js/Express backend, and MongoDB. Integrated OpenWeatherMap API for weather data, Chart.js for graphs, and Leaflet for interactive maps. Added historical search management and data export.",
    link: "https://github.com/shantanu-ingle/weather-app",
    images: [],
  },
  {
    title: "Multiling Sorting Visualizer",
    idea: "A visualization tool to demonstrate the Bubble Sort algorithm implemented in Python, Java, and C++, comparing their performance side-by-side.",
    need: "Educates users on sorting algorithms across different languages, enhancing accessibility.",
    tech: "Python, JavaScript, React, p5.js",
    models: "Custom visualization logic using p5.js for animations.",
    implementation: "Created a React app with p5.js for sorting visualizations, generated JSON files with sorting steps, and added interactive controls and multilingual support using i18n. Includes a professional dark theme.",
    link: "https://github.com/shantanu-ingle/MultiLang-Sort-Visualizer",
    images: ["Sorting-visualizer-image1.png","Sorting-visualizer-image2.png"],
  },
  {
    title: "Security Footage Alert Sender",
    idea: "Detect anomalies in security footage and send real-time alerts to the owner via SMS or email.",
    need: "Automated security monitoring for timely incident response.",
    tech: "Python, OpenCV, PyTorch, Twilio, SMTP",
    models: "CNN-based autoencoders or YOLO for anomaly detection.",
    implementation: "Processed video frames with OpenCV, detected anomalies using YOLO, sent alerts via Twilio/SMTP.",
    link: "#",
    images: [],
  },
];

export default function Projects() {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open modal with the selected image of the selected project
  const openModal = (project, index) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // Navigate to next image
  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    }
  };

  // Navigate to previous image
  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  // Fallback handler for broken images
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.style.display = 'flex';
    }
  };

  return (
    <section className="min-h-screen pt-40 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 via-black to-purple-9500">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-purple-400 text-center mb-16 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mx-4 md:mx-8 lg:mx-12 bg-gray-900/80 border border-purple-900/40 rounded-2xl shadow-xl hover:shadow-purple-800/40 transition-shadow p-6 md:p-8 lg:p-10 text-white backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Images Section */}
            {project.images.length > 0 ? (
              <div className={`grid gap-4 mb-6 ${
                project.images.length === 1 ? 'grid-cols-1' : 
                project.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                project.images.length <= 4 ? 'grid-cols-2' : 
                'grid-cols-2 md:grid-cols-3'
              }`}>
                {project.images.map((imageName, imgIndex) => {
                  const imageSrc = `/images/${imageName}`;
                  return (
                    <div key={imgIndex} className="relative group" onClick={() => openModal(project, imgIndex)}>
                      <img
                        src={imageSrc}
                        alt={`${project.title} - Screenshot ${imgIndex + 1}`}
                        className="w-full h-48 object-cover rounded-lg border border-purple-800/30 group-hover:border-purple-600/50 transition-all duration-300 cursor-pointer"
                        onError={handleImageError}
                      />
                      {/* Fallback placeholder */}
                      <div 
                        className="w-full h-48 bg-purple-900/30 rounded-lg flex items-center justify-center border border-purple-800/30 absolute top-0 left-0"
                        style={{ display: 'none' }}
                      >
                        <div className="text-center text-purple-300 p-4">
                          <div className="text-4xl mb-2">🖼️</div>
                          <p className="text-sm font-semibold">Project Image</p>
                          <p className="text-xs opacity-75 mt-1">{imageName}</p>
                          <p className="text-xs opacity-50 mt-1">
                            Image not found in <code>public/images/</code>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="w-full h-48 bg-purple-900/30 rounded-lg flex items-center justify-center shadow-inner mb-6 border border-purple-800/30">
                <span className="text-purple-300 text-lg font-semibold text-center px-4">
                  {project.title}
                  <br />
                  <span className="text-sm opacity-75">No preview images</span>
                </span>
              </div>
            )}

            {/* Project Details */}
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">{project.title}</h2>
            
            <div className="space-y-3 text-gray-300">
              <p><span className="text-purple-300 font-semibold">Idea:</span> {project.idea}</p>
              <p><span className="text-purple-300 font-semibold">Need:</span> {project.need}</p>
              <p><span className="text-purple-300 font-semibold">Tech Stack:</span> {project.tech}</p>
              <p><span className="text-purple-300 font-semibold">Models/Architecture:</span> {project.models}</p>
              <p><span className="text-purple-300 font-semibold">Implementation:</span> {project.implementation}</p>
            </div>

            <div className="mt-6">
              <a
                href={project.link}
                className="inline-block bg-purple-700/70 hover:bg-purple-600 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30 font-medium"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Image Viewer */}
      {isModalOpen && selectedProject && selectedProject.images.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-xl max-w-4xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-purple-accent transition"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={`/images/${selectedProject.images[currentImageIndex]}`}
              alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onError={handleImageError}
            />
            {selectedProject.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-purple-accent transition"
                  onClick={prevImage}
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-purple-accent transition"
                  onClick={nextImage}
                  aria-label="Next"
                >
                  →
                </button>
              </>
            )}
            <p className="text-center text-purple-light mt-4">
              {currentImageIndex + 1} of {selectedProject.images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}