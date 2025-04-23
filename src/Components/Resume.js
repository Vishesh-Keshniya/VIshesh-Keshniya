import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-title">My Resume</h2>
      {/* Replace the src with the path to your resume image */}
      <img
        className="resume-image"
        src="resume.png"  // Make sure this is the correct path
        alt="Resume"
      />
      <br />
      {/* Replace with your actual resume file path */}
      <a href="https://drive.google.com/file/d/1Slu2n_BdD082oKM0Eiijl4uYIh73WTHA/view?usp=sharing" download>
        <button className="resume-button">Download Resume</button>
      </a>
      
      <div className="resume-footer">
        <p>If you'd like to know more, feel free to download or contact me!</p>
      </div>
    </div>
  );
}

export default Resume;
