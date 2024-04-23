import React, { useState } from 'react';
import './menu.css'
import menu from '../assets/SVGs/menu.svg'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
   
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      hideImages();
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    showAllContent();
  };

  const hideImages = () => {
    const imagesToHide = document.querySelectorAll('img, main');
    imagesToHide.forEach(image => {
      image.style.display = 'none';
    });
  };


  const showAllContent = () => {
    const allContent = document.querySelectorAll('*');
    allContent.forEach(element => {
      element.style.display = ''; 
    });
  };
    
  
    return (
      <div>
        <div className="menu-icon" onClick={toggleMenu}>
          <img className='menu-icon' src={menu} style={{fill:"pink"}} alt="menu icon" />
        </div>
  
        {isOpen && (
          <div className="overlay" onClick={closeMenu}>
            <div className="overlay-content">
              <a href="#about">About</a>
              <a href="#mywork">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
            <span className="closebtn" onClick={closeMenu}>x</span>
          </div>
        )}
      </div>
    );
  };
  
  export default Menu;

