
import React from 'react';
import Image from "../../assets/My-image.jpeg";
import "./about.css";
import  cvImage from  "../../assets/cv.png";



const About = () => {

  
    return (
      <section className='about container section' id="about">
         
        <h2 className='section_title'>About Me</h2>
        <div className="about_container grid">
          <img src={Image}alt=""  className='about-img'/>
      
        <div className="about_data grid">
          <div className="about_info">
          <p>As a fullstack developer, I am passionate about creating innovative and user-friendly 
            web applications. With expertise in both frontend and backend technologies, I strive to deliver
             high-quality and scalable solutions. I have experience in building responsive and engaging user 
             interfaces using HTML, CSS, and JavaScript frameworks like React and Angular. On the backend, I am proficient 
             in languages such as JavaScript (Node.js) and PHP (Laravel). I am skilled in database management, API integration, and 
             version control systems like Git. With strong problem-solving abilities and attention to detail, I am dedicated to delivering 
             robust and scalable applications that meet client requirements. I am always eager to take on new challenges 
             and contribute to the success of projects.
             </p>
             <a href="../src/assets/cv.png" download  className='about-btn'>
  <button className='btn'>Download CV</button>
</a>

            
        

        <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles"> 
                <h3 className="skills_name">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3-alt"></i>
                  <i className="fa-brands fa-js"></i>
                  <i className="fa-brands fa-php"></i>
                  <i className="fa-brands fa-laravel"></i>
                  <i className="fa-brands fa-angular"></i>
                  <i className="fa-brands fa-react"></i>
                  <i className="fa-brands fa-node-js"></i>
                  <i className="fa-brands fa-figma"></i>
                  <i className="fa-brands fa-github"></i>
                
                </h3>

              </div>
            </div>
          </div>
          </div>
          </div>
        </div>

          </section>
    );
  }

  export default About;
  