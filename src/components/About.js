import  "../App.css"
import React from 'react'
import logo from '../images/profile-pic.jpg'
import cv from "./cv.pdf"; 


export const About = ()=>{

    return (
        <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={logo} alt="me" />
            </div>
            <div className="column right">
              <div className="text"></div>
              <br/>
              <p>
              "Hi there! My name is <b>Mohamed Khayri</b> and I'm a currently a computer science student at<b> National School 
              of computer science in Tunisia </b> . 
              I have a strong interest in the exciting and rapidly evolving fields of AI 
              and web development.<br/>
               I possess a deep passion for understanding the complex systems that underlie the digital world and 
               am committed to using my skills and knowledge to make a positive impact in these fields.<br/>
               As a student of computer science, I have developed a solid foundation in the core concepts of <b>programming,
                algorithms, and data structures</b> . I am well-versed in a range of programming languages, and am skilled in
                 developing software applications and systems that are both efficient and user-friendly.<br/>
                 I am open for any kind of ideas exchange , so <b>let's get in touch </b> . 
            
         
                </p>
                <a href={cv} download="cv.pdf">Download CV</a>

            </div>
          </div>
        </div>
      </section>
    )
}