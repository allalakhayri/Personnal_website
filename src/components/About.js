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
              
  
                 Hello, I'm <b>Mohamed Khayri</b>, and I'm studying computer science at <b>the National School of
                 Computer Science in Tunisia. </b> <br/>
                I'm passionate about <b>software development</b> field because it's dynamic and constantly evolving.<br/>
                I love figuring out how computers and the internet work, 
                and I am committed to using my skills and knowledge to make a 
                positive impact in these fields. <br/>

                In my computer science studies, I've learned about important things like<b> programming, algorithms, and data structures.</b>
                <br/>
                 I'm good at using different <b>programming languages</b>, and I can create software that works well and is easy for people to use.
                <br/>
                I'm happy to talk with anyone and exchange ideas, so <b>let's connect!</b>
         
                </p>
               <a href={cv} download="cv.pdf">Download CV</a> 

            </div>
          </div>
        </div>
              
      </section>
      
    )
}