import '../App.css'
import Linkedin from "../assets/SVGs/Linkedin";
import Email from "../assets/SVGs/Email";
import GitHub from "../assets/SVGs/GitHub";



function Contact() {
  return (
    <div>
      <footer className='footer' id='contact'>
    <div className='socials'>
     <p className='email'><Email/> <a href="mailto:loredanabenzar2@gmail.com">EMAIL</a></p>
     <p className='linkedin'><Linkedin/> <a href="https://www.linkedin.com/in/loredana-benzar/">LINKEDIN</a></p>
     <p className='github'> <GitHub/> <a href="https://github.com/LAVINIABENZAR">GITHUB</a></p>
    </div>
   </footer>
    </div>
  );
}

export default Contact
