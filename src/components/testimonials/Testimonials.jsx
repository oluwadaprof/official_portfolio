import React from 'react'
import './testimonials.css';
import { TestimonialData } from './TestimonialData';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {TestimonialData.map(data => <article className="testimonial">
          <div className="client__avatar">
            <img src={data.clientAvatar} alt="" />
          </div>
          <h5>{data.name}</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Quis consectetur aliquam, laboriosam
            earum, voluptate distinctio eius veniam, incidunt culpa doloribus eos maiores accusantium. Harum similique expedita
            at deleniti quae quibusdam?
          </small>
        </article>)}


      </div>
    </section>
  )
}

export default Testimonials