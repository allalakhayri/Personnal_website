import React,{useState} from "react";
import  "../App.css"



export const Skills = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollContainerRef = React.createRef();

  const handleScroll = (scrollOffset) => {
    setScrollPosition(scrollPosition + scrollOffset);
    scrollContainerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="activities" id="activities">
    <div className="max-width">
      <h2 className="title">My activities</h2>
    <div className="skills-container">
      <div className="skills-scroll-container" ref={scrollContainerRef}>
        <div className="skill">
          <img
            src="../images/image1.jpg"
            alt="Skill 1"
            className="skill-image"
          />
          <div className="skill-description">I participated in organizing the annual forum of ENSI. It was such a fulfilling experience for me. I loved being able to flex my organizational skills to create an unforgettable experience for attendees.</div>
        </div>
        <div className="skill">
          <img
            src="../images/image2.jpg"
            alt="Skill 2"
            className="skill-image"
          />
          <div className="skill-description">Me and my team from our participation in the Tunisian Collegiate Programming Contest(TCPC). It was a good chance to expand my network and challenge myself by solving problems and coding. </div>
        </div>
        <div className="skill">
          <img
            src="../images/image3.jpg"
            alt="Skill 3"
            className="skill-image"
          />
          <div className="skill-description">I've been an organization committee leader for 'TuniHack8.0'. We worked together effectively, and we were able to host a successful event that met everyone's expectations. Overall, my experience as a committee organization leader was likely both challenging and rewarding.</div>
        </div>
        <div className="skill">
          <img
            src="../images/image6.jpg"
            alt="Skill 4"
            className="skill-image"
          />
          <div className="skill-description">This is the final image for the Tunihack8.0, it was a life-changing experience. I've expanded my network and developed my communication skills by meeting competitors from all over the country.</div>
        </div>
        <div className="skill">
          <img
            src="../images/image4.jpg"
            alt="Skill 5"
            className="skill-image"
          />
          <div className="skill-description">I was part of the event Ensi Competitive Programming 2.0 and I succeded ,me and my team, to solve the most of the problems . It was a great chance to practice and develop my skills at problem solving and coding .</div>
        </div>
        <div className="skill">
          <img
            src="../images/image5.jpg"
            alt="Skill 6"
            className="skill-image-least"
          />
          <div className="skill-description">I'm the projects manager at Open Source Software Ensi Club(OSSEC). This experience did provide me with valuable skills and knowledge about open-source culture. We did work as a team to introduce this culture to Freshmen at our institute.</div>
        </div>
        <div className="skill">
          <img
            src="../images/image7.jpg"
            alt="Skill 6"
            className="skill-image"
          />
          <div className="skill-description">I'm a Beta Microsoft Learn Student Ambassador, a program that I've been part of since 2021 . As part of my role as an MSA, I've been responsible for organizing events and activities in my community, such as hackathons, coding competitions, and workshops.</div>
        </div>
        <div className="skill">
          <img
            src="../images/image8.jpg"
            alt="Skill 8"
            className="skill-image-last"
          />
          <div className="skill-description">I participated in the "Start it up" event focused on AI at Pristini School of AI .
The event was a great opportunity to learn from industry leaders, network with like-minded individuals and gain insight into the latest trends and innovations in the field of Artificial Intelligence.</div>
        </div>
        <div className="skill">
          <img
            src="../images/image9.jpg"
            alt="Skill 9"
            className="skill-image-last"
          />
          <div className="skill-description">This is my swag kit from Microsoft Learn Student Ambassadors that I received after hosting my first event named "Introduction to cloud computing: Azure Services".
        <br/> It was my first time explaining a concept to my institute fellows. </div>
        </div>
        
      </div>
      <div className="skills-buttons">
        <button
          className="scroll-button"
          disabled={scrollPosition === 0}
          onClick={() => handleScroll(-900)}
        >
          {"<"}
        </button>
        <button
          className="scroll-button"
          disabled={scrollPosition === 900}
          onClick={() => handleScroll(200)}
        >
          {">"}
        </button>
      </div>
    </div>
    </div>
      </section>
  );
};
