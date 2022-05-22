import React from 'react';
// import './header.module.css';
import CV from '../../assets/NEW TOBILOBA CV.docx'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' >Download CV</a>
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>

    </div>
  )
}

export default CTA