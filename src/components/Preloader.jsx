import React, { useState, useEffect } from 'react';
import './preloader.css'

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timeout); 
  }, []); 

  return (
    <div className={`preloader ${loaded ? 'loaded' : ''}`}>
      <h1 className="loader">&lt;<span  className='loader-text'>LORE</span>/&gt;</h1>
    </div>
  );
};

export default Preloader;
