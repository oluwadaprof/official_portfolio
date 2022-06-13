import React from 'react';
// import './header.module.css';
import CV from '../../assets/ADEEKO T. ISREAL CV .docx'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn' >&#128229; Download CV </a>
      <a href="#contact" className='btn btn-primary' >Let's Talk &#128266;</a>

    </div>
  )
}

export default CTA