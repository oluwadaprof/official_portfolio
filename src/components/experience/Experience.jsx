import React, { useState } from 'react'
import './experience.css';
import { BsFillPatchCheckFill } from "react-icons/bs";
import tobi from '../../assets/tobi-removebg-preview.png'

const Experience = () => {
  const [swipe, setSwipe] = useState(false)
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container' >
        <div className="experience__frontend">
          <h3>Frontend Development &#128187;</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
             </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
             </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Chakra UI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Experienced</small>
             </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience