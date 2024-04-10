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
          &#9776; Menu
        </button>
  
  
        {isOpen && (
          <div className="overlay" onClick={closeMenu}>
            <div className="overlay-content">
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#mywork" onClick={closeMenu}>Projects</a>
              <a href="#skills" onClick={closeMenu}>Skills</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
            <span className="closebtn" onClick={closeMenu}>&times;</span>
          </div>
        )}
      </div>
    );
  };
  
  export default Menu;

