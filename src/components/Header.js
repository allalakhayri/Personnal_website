import  "../App.css"
import Nav from 'react-bootstrap/Nav';

export const Header = ()=>{
  
    
    return (
     
    <Nav className="navbar">
    <div className="max-width">
      <div className="logo"><a href="#">Mohamed<span>Khayri.</span></a></div>
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