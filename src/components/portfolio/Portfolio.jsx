import React from 'react'
import './portfolio.css';
import { Porftoliodata } from './PortfolioData';

const Portfolio = () => {

  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {Porftoliodata.map(data => <article className="portfolio__item" key={data.id}>
          <div className="portfolio__item-image">
            <img src={data.img1} alt={data.title} />
          </div>
          <h3>{data.title} </h3>
          <div className="portfolio__item-cta">
            <a href="www.github.com" className='btn' >Github</a>
            <a href="www.github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>)}



      </div>
    </section>
  )
}

export default Portfolio