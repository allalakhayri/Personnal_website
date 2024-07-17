import React, { useState } from 'react';
import '../App.css';

export const Projects = () => {
  const [scrollPosition] = useState(0);
  const scrollContainerRef = React.createRef();

  const projects = [
    {
      title: 'Monopoly Game',
      image: '../images/monopoly.png', 
      description: 'A famous social game developed using Qt as part of a summer project at my school.',
      keywords: 'C++, Qt, GUI',
      github: 'https://github.com/allalakhayri/Monopoly-Game',
       
    },
    {
      title: 'Tunijob Platform',
      image: '../images/freelance.png',
      description: 'A Tunisian platform connecting job providers with job seekers.',
      keywords: 'Web dev, MERN stack',
      github: 'https://github.com/allalakhayri/Ensi-project-2022',
     
    },
    {
      title: 'FreelanceFlow App',
      image: '../images/freelance_mobile.png',
      description: 'An Android app connecting freelancers with clients.',
      keywords: 'Mobile dev, Android, Kotlin',
      github: 'https://github.com/allalakhayri/FreelanceFlow',
    
    },
    {
      title: 'AI-powered Document Management System',
      image: '../images/home_screen.PNG', 
      description: 'The Intelligent Document Management System aims to revolutionize document management using advanced artificial intelligence technologies.',
      keywords: 'AI, Serverless Architecture, Firebase, OCR',
      demo: 'https://drive.google.com/drive/folders/1eMc_1bTmdrYYqePDPLvm6pUwCo-feizS', 
    },
    {
      title: 'TV Channel Mobile App',
      image: '../images/alhiwar.jpg', 
      description: 'This mobile app is a comprehensive news platform for a TV channel, providing users with real-time news updates and video streaming.',
      keywords: 'Mobile dev, Flutter, Firebase',
      demo: 'https://drive.google.com/file/d/1qdqUnVZts6A-fa2icuLpi_um8tO3K_P_/view?usp=sharing', 
    },
    {
      title: 'Dropout Prediction Model',
      image: '../images/dropout.jpeg', 
      description: 'A machine learning model predicting the risk of students dropping out of university based on various features.',
      keywords: 'ML, Python',
      github: 'https://github.com/allalakhayri/Dropout-prediction-model-',
      demo: 'https://drive.google.com/file/d/1exGux1EymYRyiki5jlx0cYa5E_2OfxN0/view?usp=sharing', 
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="title">My Projects</h2>
      <div className="projects-container" ref={scrollContainerRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-keywords"><b>KeyWords:</b> {project.keywords}</p>
            <div className="links">
              {project.github && (
                <a href={project.github} target="_blank" className="la" rel='noreferrer'>
                  <b>GitHub Link</b>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" className="la demo" rel='noreferrer'>
                  <b>Live Demo</b>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
