import React from 'react';
import './App.css';
//import videoFile from './ASCII - A Mandelbrot Fractal Zoom.mp4'; // Ensure this path is correct
import logo from './fractallogo.svg'; // Make sure to replace this path with the path to your actual logo

function App() {
  return (
    <div>
      <div className="menu-bar">
        <img src={logo} alt="logo" className="logo"/>
        <nav>
          <ul>
            <li><a href="#practice">PRACTICE</a></li>
            <li><a href="#insights">INSIGHTS</a></li>
          </ul>
        </nav>
      </div>
      <video className='videoTag' autoPlay loop muted playsInline>
        <source src={videoFile} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
