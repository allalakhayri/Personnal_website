import {Header} from'./components/Header'
import { HomeStart } from './components/Home'
import { About } from './components/About'
import { Services } from './components/Services'
import {Skills} from'./components/Skills'
import { Contact } from './components/Contact'
import { Certificates } from './components/Certificates'
import { Projects } from './components/Projects'

import {Footer} from'./components/Footer'
import React from 'react'
import { TopButton } from './components/TopButton'
const images = [
  "../images/pic1.jpg",
  "../images/pic3.jpg",
  "../images/pic4.jpg",
  "../images/pic5.jpg",
  "../images/pic6.jpg",
  "../images/pic7.jpg"
];

 const App = ()=>{
    return (
 <div>
  <div className="scroll-up-btn">
    <i className="fas fa-angle-up" />
  </div>

  <Header/>
  <HomeStart/>
  <About/>
  <Skills /> 
  <Services/>
  <Certificates images={images}/>
  <Projects/>
  <Contact/>
  <TopButton/>
  <Footer/> 
  
 </div> 
    )
}
export default App
