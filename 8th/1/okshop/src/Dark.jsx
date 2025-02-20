import React, { useState } from 'react';
import ExpandingCircle from './ExpandingCircle';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  const toggleDarkMode = () => {
    setExpanded(true);

    // Adding a delay before changing the theme for better visual effect
    setTimeout(() => {
      setDarkMode(!isDarkMode);
      setExpanded(false);
    }, 500);
  };

  return (
    <div className={`dark-mode-container ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
      <ExpandingCircle isExpanded={isExpanded} />
    </div>
  );
};

export default DarkModeToggle;
