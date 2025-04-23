import React from 'react';
import './Home.css'
import './Nav.css'
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div>
 
    
    <div className="container">
  

      {/* Left Section */}
      <div className="left-section">
     
        <h1 className="main-title">
          I'm <span className="highlight">Vishesh Keshniya</span>
        </h1>
        
        <h2 className="sub-title"> <span className='M'>M</span><span className='E'>E</span><span className='R'>R</span><span className='N'>N</span> Stack Developer</h2>
        <img src='MERN-logo.png' className='mern-logo' alt='logo'/>
        <div className="right-section-phone">
        <img
          src="Vishesh.png"
          alt="Vishesh"
          className="profile-image-phone"
        />
        
      </div>
        <p className="description">
        Passionate MERN Stack Developer crafting dynamic and responsive web applications, leveraging MongoDB, Express.js, React, and Node.js to deliver seamless user experiences and efficient backend solutions
        </p>
        <div className="buttons">
          <button className="portfolio-btn" onClick={() => navigate("/Portfolio")}>My Portfolio</button>
          <button className="contact-btn" onClick={() => navigate("/")}>Contact Me</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img
          src="Vishesh.png" 
          alt="Vishesh"
          className="profile-image"
        />
        
      </div>
    </div>
    </div>
  );
}

export default Home;
