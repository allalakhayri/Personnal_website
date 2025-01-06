import  "../App.css"
import React from 'react'

import cv from "./cv.pdf"; 


export const About = ()=>{

    return (
        <section className="about" id="about">
          
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
            <img src={`${process.env.PUBLIC_URL}/images/profile-pic.png`} alt="me" />
            </div>
            <div className="column right">
              <div className="text"></div>
              <br/>


                Hello there! 👋, I am a passionate <b>Software Developer</b> with an eye for creating robust and scalable websites and web applications. 
                I enjoy using my expertise in front-end and back-end technology to bring creative ideas to life. <br/>

I am still on the journey of learning and discovering new things in the world of tech.<br/>

Other of my hobbies include reading, discovering and learning new things, playing computer games, movies and music.
<br/>
               <a href={cv} download="cv.pdf">Download CV</a> 

            </div>
          </div>
        </div>
              
      </section>
      
    )
}