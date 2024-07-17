import React, { useState } from 'react';
import '../App.css';

export const HomeStart = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <>
      {showAnnouncement && (
        <div className="announcement">
          <p>
            🚀 I am actively seeking a software developer position. Let's connect and create something amazing together! 💼
            <button className="close-btn" onClick={() => setShowAnnouncement(false)}>×</button>
          </p>
        </div>
      )}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hey, I'm Mohamed Khayri Allala</div>
            <div className="text-2"></div>
            <div className="text-3">Software Developer</div>
            <a href="#contact">Contact Me</a>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/mohamed-khayri-allala/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/allalakhayri" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://leetcode.com/u/user1206a/" target="_blank" rel="noreferrer">
                <i className="fas fa-code"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
