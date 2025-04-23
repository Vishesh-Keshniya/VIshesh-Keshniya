import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Introduction/About Me */}
      <section id="about">
        <h2>About Me</h2>
        <p>
        I am a postgraduate student in computer science with a strong foundation in fullstack web development, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I aim to leverage my technical skills, effective communication, project management abilities, and adaptability to contribute to innovative software development projects. With a commitment to strong work ethics and continuous learning, I strive to deliver scalable and user-focused solutions.        </p>
      </section>
  {/* Education */}
  <section id="education">
        <h2>Education</h2>
        <ul>
        <li>
            <h3>
            Bachelor of Computer Applications (BCA)</h3>
            <p>International Institute of Professional Studies (DAVV)<br/> CGPA : 7.29<br/>2020-2023</p>
          </li>
          <li>
            <h3>Master of Computer Applications (MCA)</h3>
            <p>International Institute of Professional Studies (DAVV)<br/> CGPA : 7.36<br/>2023-2025</p>
          </li>
        </ul>
      </section>
      {/* Skills */}
      <section id="skills">
  <h2>Skills</h2>
  <ul class="skills-list">
    <li>MongoDB</li>
    <li>Express.js</li>
    <li>React</li>
    <li>Node.js</li>
    <li>JavaScript</li>
    <li>HTML, CSS</li>
    <li>REST APIs</li>
    <li>Git & GitHub</li>
  </ul>
</section>


      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Link Tree</h3>
            <p>A full-stack web application that allows users to create a personalized link hub just like Linktree. Users can register, log in, and manage a set of links that are showcased on a clean, shareable public profile.</p>
            <p><strong>Technologies Used:</strong> MongoDB, Express.js, React, Node.js, REST API</p>
            <a href="https://link-tree-eta-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div className="project">
            <h3>URL Shortener</h3>
            <p>A URL shortener that allows users to input long URLs and convert them into shorter, more manageable links. The shortened link can be shared easily and redirects the user to the original long URL when clicked.</p>
            <p><strong>Technologies Used:</strong> MongoDB, Express.js, React, Node.js, REST API</p>
            <a href="https://link-shortly-mu.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div className="project">
            <h3>Form-bot</h3>
            <p>Form-bot is an interactive web app that streamlines data collection through dynamic forms. It adapts based on user input, offering real-time validation and feedback. Built with the MERN stack, it stores user responses in MongoDB.</p>
            <p><strong>Technologies Used:</strong>MongoDB, Express.js, React, Node.js, REST API</p>
            <a className='project-link' href="https://form-bot-full-stack-31tj.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          
          <div className="project">
            <h3>Portfolio Website</h3>
            <p>This Portfolio Website is a personal website designed to showcase my skills, projects, experience, and education in an interactive and visually appealing manner. It provides a clean, modern, and responsive UI, ensuring a seamless experience across different devices. Built using React.js, the website highlights my expertise in full-stack development with the MERN stack (MongoDB, Express.js, React.js, Node.js) and other essential web technologies.</p>
            <p><strong>Technologies Used:</strong>React.js</p>
            <a className='project-link' href="https://visheshkeshniya.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2>Experience</h2>
        <ul>
          
          <li>
            <h3> Full Stack Intern at Cuvette 6 Months Experience</h3>
            <p>As a Full Stack Intern at Cuvette, I was trained on the MERN stack (MongoDB, Express.js, React, Node.js), gaining hands-on experience in developing and deploying full-stack web applications. I contributed to both front-end and back-end development, improving my skills in building dynamic, user-centric applications while working in an agile team environment.</p>
          </li>
        </ul>
      </section>

    

     
    </div>
  );
};

export default Portfolio;
