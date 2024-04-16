import React, { useState, useEffect } from 'react';
import './App.css'; // Importing our CSS file

const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShowMenu(false);
      } else {
        // if scroll up show the navbar
        setShowMenu(true);
      }

      // remember current page location to compare it with the new one
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`menu-bar ${showMenu ? 'show' : 'hide'}`}>
      {/* Menu content */}
    </div>
  );
};

export default MenuBar;
