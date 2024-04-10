import React, { useState } from 'react';
import './menu.css'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen); 
    };
  
    const closeMenu = () => {
      setIsOpen(false); 
    };
  
    return (
      <div>
        <button className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </button>
  
  
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

