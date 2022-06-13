import React from 'react'
import './footer.css';
import { FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#home" className='footer__logo'>ADEEKO.I</a>
    <ul className='permalinks'>
      <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href="www.facebook.com"><FaLinkedinIn/></a>
      <a href="www.instagram.com"><FiGithub/></a>
        <a href="www.twitter.com"><IoLogoTwitter/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Adeeko Tobiloba, All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer