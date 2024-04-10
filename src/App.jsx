
import photo from './assets/images/photo.jpeg';
import Next from './assets/images/Next.png'
import node from './assets/SVGs/node.svg'
import prisma from './assets/SVGs/prisma.svg'
import './App.css'
import Contact from './components/Contact'
import './fonts.css'
import Preloader from './components/Preloader';
import Projects from './components/projects';






function App() {
  return (
    <>
      <Preloader />
      <div className='app'>
        <div className='navbar'>
          <div className='logo' ><a href="#home"><h1>&lt;<span className='logo-text'>LORE</span>/&gt;</h1></a></div>
          <div className='header' >
            <ul className='header'>
              <a href="#about"><li className='about'>ABOUT</li></a>
              <a href="#mywork"> <li className='my-work'>PROJECTS</li></a>
              <a href="#skills"><li className='skills'>SKILLS</li></a>
              <a href="#contact"><li className='contact'>CONTACT</li></a>
            </ul>
          </div>
        </div>

        <div className='main' id='about'>

          <div className='hero'>
            <div className='hero-text'>
              <h1 className='hero-message hero-message-1'> <p>HI,</p>
                I'M <span className='first' style={{ display: 'inline-block' }}>LOREDANA</span> <span className='first' style={{ display: 'inline-block' }}>BENZAR</span> <span className='comma'>,</span> </h1>
              <h1 className='hero-message'>A WEB DEVELOPER</h1>
              <br />
              <h1 className='hero-message-2'>LET'S GIVE YOUR IDEAS A SHAPE</h1>

            </div>
            <img src={photo} alt="self portrait" className='hero-image' />
          </div>

          <br />
          <div id='mywork'>
         <Projects/>

          </div>
         
          <br />
          <div className='skills' id='skills'>
            <div className='tech-stack'><span className='skills-title'>Tech Stack</span>
              <p align="center" className='svgs'>
                <a href="https://www.prisma.io/" target='_blank' rel='noreffer'> <img src={prisma} alt="Prisma" /></a>
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="70" height="70" /> </a>
                <a href="https://expressjs.com" target="_blank" rel="noreferrer"><span className='express'>express</span></a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="70" height="70" /> </a>
                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="70" height="70" /> </a>
                <a href="https://jasmine.github.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg" alt="jasmine" width="70" height="70" /> </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="70" height="70" /> </a>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src={Next} alt="nextjs" width="96" height="70" /></a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src={node} alt="nodejs" width="70" height="70" /> </a>
                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="70" height="70" /> </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="70" height="70" /> </a> </p>
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
