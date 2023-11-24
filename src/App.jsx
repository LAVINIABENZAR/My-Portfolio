import { useState } from 'react'

import './App.css'
import Contact from './components/Contact'

function App() {
  

  return (
  <div className='app'>
    <div className='logo' ><a href="#home"><h1>~ 𝓛𝓑 ~</h1></a></div>
    <div className='header' id='home'>
      <ul className='header'>
      <a href="#about"><li className='about'>ABOUT ME</li></a>
      <a href="#mywork"> <li className='my-work'>MY WORK</li></a>
      <a href="#skills"><li className='skills'>SKILLS</li></a>
      <a href="#contact"><li className='contact'>CONTACT</li></a>
      </ul>
     
    </div>
  
  <div className='main' id='about'>
      <div className='hero'> 
       <div className='hero-text'>
        <h1 className='hero-message'>HI! I'M LOREDANA BENZAR, </h1>
        <h1 className='hero-message'>A WEB DEVELOPER</h1>
        <br />
        <h1 className='hero-message-2'>I'm also a Boolean student at the moment</h1>

       </div>
      <img src="src/assets/my-photo-2.jpeg" alt="" className='hero-image'/>
      </div>
 
      <br />
      <div className='section work-section' id='mywork'>
       <h1 className='work-title' data-text="here is some of my work"></h1>
       <div className='projects'>
         <div className='project-1'>
         <a href="https://github.com/LAVINIABENZAR/js-dom-brewery-tours-challenge" className='brewery-link'> <img src="src/assets/Brewery-Tours.jpeg" alt="brewery locations" className='brewery-tours'/> </a>
         <p>Brewery Tours</p>
         </div>
         <div className='project-2'>
          <a href="https://github.com/LAVINIABENZAR/react-greengrocers"><img src="src/assets/Greengrocers.jpeg" alt="products" className='brewery-tours'/></a>
          <p>Greens Shop</p>
         </div>
         <div className='project-3'>
          <a href="http://localhost:5174/"><img src="src/assets/Cohort Manager.jpeg" alt="" className='brewery-tours' /></a>
          <p>Cohort Manager App</p>
         </div>
       </div>
      </div>
      <br />
      <div className='skills' id='skills'>
      <ul className='list'>
        <h1 className='skills-title'>~ MY SKILLS ~</h1>
        <li className='list-item html' id='html' >HTML</li>
        <li className='list-item css'>CSS</li>
        <li className='list-item javascript'>JavaScript</li>
        <li className='list-item react'>React</li>
        <li className='list-item api'>API's</li>
      </ul>
      </div> 
     
    
    </div>
    <div>
    <Contact/>
    </div>
   
  </div>
    

   
  )
}

export default App
