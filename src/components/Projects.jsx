import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Audio Separation with Notes, Tempo, and Key Detection",
    idea: "A system to separate audio into vocals, bass, drums, and other components, while detecting musical attributes like notes, tempo, and key for music analysis.",
    need: "Enables music production, karaoke, and analysis by providing clean audio stems and musical insights, addressing issues like vocal leakage.",
    tech: "Python, Flask, PyTorch, Demucs, Open-Unmix, Librosa, Plask",
    models: "U-Net-based Demucs for audio separation, spectrogram analysis with Librosa for tempo and key detection, post-processing for quality enhancement.",
    implementation: "Built a Flask backend to process audio files, separate tracks using Demucs, and analyze tempo/key with Librosa. Plask integrated for motion visualization. Frontend displays separated tracks and musical attributes.",
    link: "#",
  },
  {
    title: "Ensemble Learning for Fundus Image Disease Detection",
    idea: "Detect eye diseases like diabetic retinopathy from retinal fundus images using an ensemble of deep learning models.",
    need: "Early diagnosis of eye diseases, improving precision in medical imaging analysis.",
    tech: "Python, PyTorch, Albumentations, Scikit-learn, Pandas",
    models: "Ensemble of ResNet, EfficientNet, and DenseNet with focal loss and threshold tuning for multi-label classification.",
    implementation: "Preprocessed fundus images, applied augmentations, trained ensemble models, and evaluated metrics like precision and recall. Optimized for high recall/low precision issues.",
    link: "#",
  },
  {
    title: "Tumor Detection Using MRI Images",
    idea: "Identify tumors in brain MRI scans using deep learning for accurate medical diagnosis.",
    need: "Precise tumor detection to assist radiologists in treatment planning.",
    tech: "Python, PyTorch, torchvision, OpenCV",
    models: "Convolutional Neural Networks, U-Net for tumor segmentation.",
    implementation: "Preprocessed MRI scans, trained CNNs for classification and U-Net for segmentation, tested on medical datasets for accuracy.",
    link: "#",
  },
  {
    title: "Profanity Beeping in Videos",
    idea: "Automatically detect and censor profanity in video audio by overlaying beeps.",
    need: "Content moderation for family-friendly or professional video content.",
    tech: "Python, Librosa, SpeechRecognition, MoviePy",
    models: "Speech-to-text for profanity detection, audio editing for beep overlay.",
    implementation: "Extracted video audio, transcribed with SpeechRecognition, identified profanity using a predefined list, overlaid beeps with MoviePy, and recompiled the video.",
    link: "#",
  },
  {
    title: "Scheduling and Summarizing App",
    idea: "Summarize events from text and schedule them in Google Calendar with name, date, and time.",
    need: "Automate event management and summarization for improved productivity.",
    tech: "Python, Google Calendar API, spaCy, Transformers",
    models: "BART for text summarization, Google API for calendar integration.",
    implementation: "Parsed input text with spaCy, summarized events using BART, authenticated with Google API, and added events to Calendar.",
    link: "#",
  },
  {
    title: "Security Footage Alert Sender",
    idea: "Detect anomalies in security footage and send real-time alerts to the owner via SMS or email.",
    need: "Automated security monitoring for timely incident response.",
    tech: "Python, OpenCV, PyTorch, Twilio, SMTP",
    models: "CNN-based autoencoders or YOLO for anomaly detection.",
    implementation: "Processed video frames with OpenCV, detected anomalies using YOLO, sent alerts via Twilio/SMTP.",
    link: "#",
  },
  {
    title: "IPL Match Win Prediction",
    idea: "Predict the outcome of IPL matches (win/loss) using historical match data, player statistics, and match conditions.",
    need: "Provide accurate predictions for fans, teams, and analysts to enhance engagement and strategic decision-making in cricket.",
    tech: "Python, Django, React, FastAPI, scikit-learn, XGBoost, pandas, numpy",
    models: "Ensemble learning with XGBoost as the primary model, combined with Random Forest and Gradient Boosting for improved accuracy.",
    implementation: "Developed a Django backend to manage data and serve the web app, with a React frontend for user interaction. FastAPI provided a RESTful API for real-time predictions. Preprocessed IPL datasets by cleaning null values and encoding categorical features (e.g., teams, venues). Trained an XGBoost-based ensemble model on features like team performance, player stats, and match conditions, achieving robust predictive performance.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
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
            className="bg-gray-900/80 border border-purple-900/40 rounded-2xl shadow-xl hover:shadow-purple-800/40 transition-shadow p-6 md:p-8 lg:p-10 text-white backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-full h-48 bg-purple-900/30 rounded-lg mb-6 flex items-center justify-center shadow-inner">
              <span className="text-white text-xl font-semibold text-center px-4">{project.title}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">{project.title}</h2>
            <p className="text-gray-300 text-base mb-2"><strong>Idea:</strong> {project.idea}</p>
            <p className="text-gray-300 text-base mb-2"><strong>Need:</strong> {project.need}</p>
            <p className="text-gray-300 text-base mb-2"><strong>Tech Stack:</strong> {project.tech}</p>
            <p className="text-gray-300 text-base mb-2"><strong>Models/Architecture:</strong> {project.models}</p>
            <p className="text-gray-300 text-base mb-6"><strong>Implementation:</strong> {project.implementation}</p>
            <a
              href={project.link}
              className="inline-block bg-purple-700/70 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}