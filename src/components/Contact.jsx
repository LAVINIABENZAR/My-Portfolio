import { useState } from "react";
import '../App.css'
import Linkedin from "../assets/SVGs/Linkedin";



function Contact() {
  return (
    <div>
      <footer className='footer' id='contact'>
    <div className='socials'>
     <p className='email'> <img src="src/assets/email-svgrepo-com.svg" alt="" className="email-svg"/><a href="mailto:loredanabenzar2@gmail.com">EMAIL</a></p>
     <p className='linkedin'><Linkedin/> <a href="https://www.linkedin.com/in/benzar-loredana-80b238201/">LINKEDIN</a></p>
     <p className='github'> <img src="src/assets/github-svgrepo-com.svg" alt="" /><a href="https://github.com/LAVINIABENZAR">GITHUB</a></p>
    </div>
   </footer>
    </div>
  );
}

export default Contact
