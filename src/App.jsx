import { useState, useEffect } from 'react';
import photo from './assets/images/photo.jpeg';
import Greengrocers from './assets/images/Greengrocers.jpeg';
import MealApp from './assets/images/MealApp.png'
import './App.css'
import Contact from './components/Contact'
import './fonts.css'
import Preloader from './components/Preloader';



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
          <div className='section work-section' id='mywork'>
            <h1 className='work-title'>here is some of my work</h1>
            <div className='projects'>
              <div className='project project-1'>
                <div className='container left content'>
                  <div className='project-details first-project'>
                    <h2><span className='project-title'>Meal Planner App</span></h2>
                    <ul> <span className='subtitle'>Features:</span>
                      <li>Authentication</li>
                      <li>Meal Management</li>
                      <li>Cooking Time Notifications</li>
                    </ul>
                    <div ><span className='subtitle'>Technologies Used:</span>
                      <p align="center">
                      <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50" /> </a>
                       <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="/src/assets/images/Next.js.png" alt="nextjs" width="60" height="50" /></a> 
                       <a href="https://www.prisma.io/" target='_blank' rel='noreffer'> <img src="/src/assets/SVGs/prisma-svgrepo-com.svg" alt="Prisma" width="50" height="50" /></a>
                       <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="50" height="50" /> </a> 
                       <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50" /> </a> </p>
                    </div>

                  </div>
                  <a href="https://be-on-thyme-pi.vercel.app/myprofile" className='brewery-link'>
                    <img src={MealApp} alt="brewery locations" className='brewery-tours' />
                  </a>
                </div>
              </div>

              <div className='project project-2'>
                <div className='container right content'>
                  <a href="https://github.com/LAVINIABENZAR/react-greengrocers">
                    <img src={Greengrocers} alt="products" className='brewery-tours' />
                  </a>
                  <div className='project-details second-project'>
                    <h2><span className='project-title'>Greens Shop</span></h2>
                    <ul>
                      <li>Feature 1</li>
                      <li>Feature 2</li>
                      <li>Feature 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <br />
          <div className='skills' id='skills'>
          <div className='tech-stack'><span className='skills-title'>Tech Stack</span>
                      <p align="center">
                       <a href="https://www.prisma.io/" target='_blank' rel='noreffer'> <img src="/src/assets/SVGs/prisma-svgrepo-com.svg" alt="Prisma" /></a>
                       <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="70" height="70" /> </a>
                       <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="70" height="70" /> </a> 
                       <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="70" height="70" /> </a> 
                       <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="70" height="70" /> </a> 
                       <a href="https://jasmine.github.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg" alt="jasmine" width="70" height="70" /> </a> 
                       <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="70" height="70" /> </a> 
                       <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="/src/assets/images/Next.js.png" alt="nextjs" width="80" height="70" /></a> 
                       <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="/src/assets/SVGs/nodejs-icon.svg" alt="nodejs" width="70" height="70" /> </a> 
                       <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="70" height="70" /> </a> 
                       <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="70" height="70" /> </a> </p>
                    </div>

          </div>
<div class="light-ray-container">
  <p>gggggggggggggggggggggggggggggggggggggggg</p>
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
