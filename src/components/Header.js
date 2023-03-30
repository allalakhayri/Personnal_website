import  "../App.css"
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';

export const Header = ()=>{
  const [navbarBg, setNavbarBg] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
      const scrollTop = window.scrollY;

      if (scrollTop > threshold) {
        setNavbarBg('#878a8ebe');
      } else {
        setNavbarBg('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
    <Nav className="navbar" style={{ backgroundColor: navbarBg }}>
    <div className="max-width">
      <div className="logo"><a href="#home">Mohamed<span>Khayri.</span></a></div>
      <ul className="menu">
        <li><a href="#home" className="menu-btn" >Home</a></li>
        <li><a href="#about" className="menu-btn">About</a></li>                                    
        <li><a href="#activities" className="menu-btn" >Activities</a></li>
        <li><a href="#skills" className="menu-btn" >Skills</a></li>
        <li><a href="#certificates" className="menu-btn">Certificates</a></li>
        <li><a href="#projects" className="menu-btn">Projects</a></li>
        <li><a href="#contact" className="menu-btn">Contact</a></li>
      </ul>
      <div className="menu-btn">
        <i className="fas fa-bars" />
      </div>
    </div>
  </Nav>
      
    )
}