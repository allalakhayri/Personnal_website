import  "../App.css"
import React from 'react'

export const Services = ()=>{
    return (
        <section className="services" id="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="serv-content">
            <div className="card">
            <div className="box">
                <div className="text">Web <br/>developpement </div>
                <p>I've been working on some projects in Web developpemnt field . 
                  I've been using HTML, CSS and JS then I developped some project using 
                  ReactJs for frontend , NodeJs and express for backend and MongoDB as a database </p>
                
              </div>
            </div>
            <div className="card">
              <div className="box">
                
                <div className="text">Artificial<br/> Intelligence </div>
                <p>I am actually a computer science student specialised in Aritificial Intelligence and 
                  that's my main passion . I am active on Kaggle and I've participated in several 
                  AI competitions and Hackathons </p>
                  < a href="https://www.kaggle.com/mohamedkhayriallala" target="_blank" className="serv-link" rel='noreferrer'>Kaggle</a>

              </div>
            </div>

            <div className="card">
              <div className="box">
  
                <div className="text">Competitive Porgramming</div>
                <p>I am also intersted in competitive programming. 
                  I participated in Tunisian Collegiate Programming Contest (TCPC) in 2021 and since then 
                  I've been active on Codeforces platform.
                </p>
                < a href="https://codeforces.com/profile/kh_99" target="_blank" className="serv-link" rel='noreferrer'>Codeforces</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}