import React from 'react'
import './services.css'
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services  &#128736;</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development &#128187;</h3>
          </div>

          <ul className="service__list">
            <li>
              <p> &#9989;</p>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <p> &#9989;</p>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <p> &#9989;</p>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <p> &#9989;</p>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <p> &#9989;</p>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services