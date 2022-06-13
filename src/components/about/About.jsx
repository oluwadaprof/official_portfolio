import React from 'react';
import './about.css'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";


const About = () => {
  return (
    <section id='about' >
      <h5>Get to know</h5>
      <h2>About Me &#128526;</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={aboutMe} alt="About me" /> */}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' >
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>

            <article className='about__card' >
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>2+ clients nationwide</small>
            </article>

            <article className='about__card' >
              <VscFolderOpened className='about__icon' />
              <h5>Projects</h5>
              <small>3 completed</small>
            </article>
          </div>
          <p>I am tech enthusiast, that takes pride in solving problem using the best
            and i also cherish code optimization. My work ethics is unquestionable with
             a good communication skill and team synchronization.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk &#128266;</a>
        </div>
      </div>
    </section>
  )
}

export default About