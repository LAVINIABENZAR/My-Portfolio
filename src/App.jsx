import photo from './assets/images/photo.jpeg';
import Next from './assets/images/Next.png'
import node from './assets/SVGs/node.svg'
import prisma from './assets/SVGs/prisma.svg'
import './App.css'
import Contact from './components/Contact.jsx'
import './fonts.css'
import Preloader from './components/Preloader.jsx';
import MyWork from './components/MyWork.jsx';
import Menu from './components/Menu.jsx';
import express from './assets/SVGs/express.svg'
import tailwind from './assets/SVGs/tailwind.svg'
import typescript from './assets/SVGs/typescript.svg'
import Resume from './components/Resume.jsx';


function App() {
  return (
    <>
      <Preloader />
      <div className='app'>
        <div className='navbar'>
          <div className='logo' ><a href="#home">LOREDANA</a></div>
          <div className='header' >
            <Menu />
          </div>
        </div>
        <div className='main' id='about'>
          <div className='hero'>
            <div className='hero-text'>
              <h1 className='hero-message hero-message-1'> <p>HI,</p>
                I'M <span className='first' style={{ display: 'inline-block' }}>LOREDANA</span> <span className='first' style={{ display: 'inline-block' }}>BENZAR,</span> <span className='comma'>,</span> </h1>
              <h1 className='hero-message hm2'>SOFTWARE ENGINEER</h1>
              <br />
              <h1 className='hero-message-2'>LET'S GIVE YOUR IDEAS A SHAPE</h1>
              <Resume/>
            </div>
            <img src={photo} alt="self portrait" className='hero-image'/>
          </div>
          <br />
          <div id='mywork'>
            <MyWork />
          </div>
          <br />
          <div className='skills' id='skills'>
            <div className='tech-stack'><span className='skills-title'>Tech Stack</span>
              <p align="center" className='svgs'>
                <a href="https://www.prisma.io/" target='_blank' rel='noreffer'> <img src={prisma} alt="Prisma" /></a>
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="70" height="70" /> </a>
                <a href="https://expressjs.com" target="_blank" rel="noreferrer"><img src={express} alt="express" /></a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="70" height="70" /> </a>
                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="70" height="70" /> </a>
                <a href="https://jasmine.github.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg" alt="jasmine" width="70" height="70" /> </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="65" height="65" /> </a>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src={Next} alt="nextjs" width="96" height="70" /></a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src={node} alt="nodejs" width="70" height="70" /> </a>
                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="70" height="70" /> </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="70" height="70" /> </a> 
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src={tailwind} alt="tailwind" width="70" height="70" /> </a>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src={typescript} alt="react" width="65" height="65" /> </a> 
               
                </p>
            

            </div>
          </div>
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
