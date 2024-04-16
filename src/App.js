import React, { useState, useEffect, useRef} from 'react';
import './App.css';
import videoFile from './ASCII - A Mandelbrot Fractal Zoom.mp4';
import logo from './fractallogo.svg';
import goatpic from './goat.jpeg';
import scrollDownArrow from './scrollIcon.png';
import manInterviewing from './maninterviewing.png';
import statsPic from './statspic.png';
import { Superpowers } from './components/Superpowers';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.style.animation = 'focusVideo 5s forwards';
    }
  }, []);

  useEffect(() => {
    // Select all child elements you want to apply the effect to
    const targets = document.querySelectorAll('.content .fade-in-target');

    const checkVisibility = () => {
      targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        const fifthHeight = rect.height / 5;  // Get half height of the element
        const elementMiddle = rect.top - fifthHeight;  // Calculate middle position of the element
        const bottomOfViewport = window.innerHeight;

        // Check if the bottom of the viewport has reached the middle of the element
        if (elementMiddle <= bottomOfViewport) {
          target.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check on initial load

    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);


  const superpowers = ['Confidence.', 'Skills.', 'Future.'];
  const [showMenu, setShowMenu] = useState(true); // State to manage the visibility of the menu bar
  let lastScrollY = window.scrollY;  // Track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      // Show or hide the menu based on the scroll direction
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // Check if scrolling down and past a certain point
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }

      lastScrollY = window.scrollY; // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll); // Attach the scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
  <div>
    <div className={`menu-bar ${showMenu ? '' : 'hide'}`} style={{transition: 'top 0.3s'}}>
      <img src={logo} alt="logo" className="logo"/>
      <nav>
        <ul>
          <li><a href="#practice">practice</a></li>
          <li><a href="#insights">insights</a></li>
        </ul>
      </nav>
    </div>
    <img src={scrollDownArrow} alt="Scroll down" className="scroll-arrow"/>
    <Superpowers superpowers={superpowers} className="superpowers-text"/>
    <div className="video-container">
      <video className="videoTag" autoPlay loop muted playsInline>
        <source src={videoFile} type="video/mp4"/>

        Your browser does not support the video tag.
      </video>

    </div>
    <div className="content">


        <img src={manInterviewing} alt="InterviewingPic" className="man-inter custom-cursor-hover image-hover-effect fade-in-target"/>
        <div className="interviewtext custom-cursor-hover fade-in-target">
          A.I Powered Interviews with <br/> live personalized questions.
        </div>
        <img src={statsPic} alt="stat" className="stat-style custom-cursor-hover image-hover-effect fade-in-target"/>
        <div className="stat-text custom-cursor-hover fade-in-target">
          Instant, detailed feedback to <br/> enhance performance.
        </div>
      <h1 className="contentHeader fade-in-target">Revolutionized Recruiting</h1>
      <p className="contentBody fade-in-target">The job market is more competitive than ever.<br/> Prepare for those tough
        interviews <br/>with Fractal. </p>
    </div>
  </div>
);
}


export default App;
