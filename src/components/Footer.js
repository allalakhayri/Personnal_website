import  "../App.css"
import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	
	faFacebook,
	faTwitter,
	
	faLinkedin,
	faGithub
  } from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
return (
	<div className="social-container">
		<h3 className="follow-us">Follow me </h3>
		<br/>
		<a href="https://github.com/allalakhayri" target="_blank"
		className="github social" rel='noreferrer'>
		<FontAwesomeIcon icon={faGithub} size="3x" />
		</a>

		<a href="https://www.facebook.com/med.khayri.127" target="_blank"
		className="facebook social" rel='noreferrer'>
		<FontAwesomeIcon icon={faFacebook} size="3x" />
		</a>
		<a href="https://twitter.com/MedKhayri1"  target="_blank" className="twitter social" rel='noreferrer'>
		<FontAwesomeIcon icon={faTwitter} size="3x" />
		</a>
		<a href="https://www.linkedin.com/in/mohamed-khayri-allala/" target="_blank" rel='noreferrer'
		className="linkedin social">
		<FontAwesomeIcon icon={faLinkedin} size="3x" />
		</a>
		<br/>
		<div>
			<footer className="foot">&copy; All rights reserved  2023</footer>
		</div>
		
	</div>
	
);
};