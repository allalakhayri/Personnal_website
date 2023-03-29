import  "../App.css"
import React ,{useState} from 'react'





export const Projects = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const scrollContainerRef = React.createRef();
  
    const handleScroll = (scrollOffset) => {
      setScrollPosition(scrollPosition + scrollOffset);
      scrollContainerRef.current.scrollLeft += scrollOffset;
    };
  
    return (
      <section className="projects" id="projects">
      
        <h2 className="title">My projects</h2>
      
        <div className="skills-scroll-container" ref={scrollContainerRef}>
          <div className="skill">
            
            <div className="skill-description">I developed the famous social game "Monopoly" using Qt as part of summer project at my school . <br/> <b>KeyWords:</b>C++, Qt , GUI <br/></div>
            <a href="https://github.com/allalakhayri/Monopoly-Game" target="_blank" className="la"><b>Github Link</b></a>
          </div> 
          <div className="skill">
            
            <div className="skill-description">Tunijob is a tunisian platform that connects people who provides jobs to people looking for it . <br/> <b>KeyWords:</b>Web dev , MERN stack , Freelance<br/> </div>
            <a href="https://github.com/allalakhayri/Ensi-project-2022" target="_blank" className="la"><b>Github Link</b></a>

          </div>
          <div className="skill">
            
            <div className="skill-description">I've developed my personnal website using React to share my work and profile .<br/> <b>KeyWords:</b>Web dev , React Js <br/> </div>
            <a href="https://github.com/allalakhayri/PersonnalPortfolio" target="_blank" className="la"><b>Github Link</b></a>

          </div>
          
          </div>
          
       

        </section>
    );
  };
  