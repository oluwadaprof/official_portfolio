import React from 'react'
import './testimonials.css';
import { TestimonialData } from './TestimonialData';
// import Swiper core and required modules
import {  Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[ Pagination,  A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      
      className="container testimonials__container">
        {TestimonialData.map(data => <SwiperSlide key={data.id} className="testimonial">
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
        </SwiperSlide>)}


      </Swiper>
    </section>
  )
}

export default Testimonials