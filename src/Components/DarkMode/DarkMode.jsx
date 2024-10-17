import React, { useState } from 'react';
import './DarkMode.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const darkHandle = () => {
    setIsDarkMode(!isDarkMode); 
    document.body.classList.toggle('darkmode'); 
  };

  return (
    <div className="dark-mode-icon">
        <FontAwesomeIcon 
          icon={faLightbulb} 
          onClick={darkHandle} 
        />
    </div>
  );
}
