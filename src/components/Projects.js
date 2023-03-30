import  "../App.css"
import React ,{useState} from 'react'





export const Projects = () => {
    // eslint-disable-next-line no-unused-vars
    const [scrollPosition] = useState(0);
  
    const scrollContainerRef = React.createRef(); 
  
  
    return (
      <section className="projects" id="projects">
      
        <h2 className="title">My projects</h2>
      
        <div className="skills-scroll-container" ref={scrollContainerRef}>
          <div className="skill">
            
            <div className="skill-description">I developed the famous social game "Monopoly" using Qt as part of summer project at my school . <br/> <b>KeyWords:</b>C++, Qt , GUI <br/></div>
            <a href="https://github.com/allalakhayri/Monopoly-Game" target="_blank" className="la" rel='noreferrer'><b>Github Link</b></a>
          </div> 
          <div className="skill">
            
            <div className="skill-description">Tunijob is a tunisian platform that connects people who provides jobs to people looking for it . <br/> <b>KeyWords:</b>Web dev , MERN stack , Freelance<br/> </div>
            <a href="https://github.com/allalakhayri/Ensi-project-2022" target="_blank" className="la" rel='noreferrer'><b>Github Link</b></a>

          </div>
          <div className="skill">
            
            <div className="skill-description">I've developed my personnal website using React to share my work and profile .<br/> <b>KeyWords:</b>Web dev , React Js <br/> </div>
            <a href="https://github.com/allalakhayri/Personnal_website" target="_blank" className="la" rel='noreferrer'><b>Github Link</b></a>

          </div>
          <div className="skill">
            
            <div className="skill-description">I've developed a Machine Learning model <br/>that predicts the risk of students dropping <br/>out of university based on various features such as marital status, application mode, academic performance...<br/> <b>KeyWords:</b>ML , Python <br/> </div>
            <a href="https://github.com/allalakhayri/Dropout-prediction-model-" target="_blank" className="la" rel='noreferrer'><b>Github Link</b></a>

          </div>
          
          </div>
          
       

        </section>
    );
  };
  