import React, {useState} from 'react'
import CTA from './CTA'
import './header.css';
import ME from '../../assets/tobi-removebg-preview.png';
import HeaderSocials from './HeaderSocials';
import { FcInternal } from "react-icons/fc";



const Header = () => { 

  const [showIcon, setShowIcon] = useState(false)
  return (
    <header>
      <div className="container header__container">
        <h5>Hello &#128075; I'm</h5>
        <h1>Isreal Adeeko</h1>
        <h5 className='text-light' >&#128187; Frontend Web Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="Isreal" />
      </div>

        <a href="#contact" className='scroll__down'> <FcInternal className='scroll__icon'  />Scroll Down</a>
 
      </div>
    </header>
  )
}

export default Header