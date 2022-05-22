import React from 'react'
import CTA from './CTA'
import './header.css';
import ME from '../../assets/tobi-removebg-preview.png';
import HeaderSocials from './HeaderSocials';



const Header = () => { 
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Isreal Adeeko</h1>
        <h5 className='text-light' >Frontend Web Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="Isreal" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
 
      </div>
    </header>
  )
}

export default Header