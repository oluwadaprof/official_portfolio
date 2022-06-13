import React from 'react'
import './services.css'
// import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  const webListData = [
    {
      id:1,
      skills:'react.js',
    },
    {
      id: 2,
      skills: 'Redux',
    },
    {
      id: 3,
      skills: 'CSS',
    },
    {
      id: 4,
      skills: 'Next.js',
    },
    {
      id: 5,
      skills: 'Chakra UI',
    }
  ]

  const appListData = [
    {
      id: 1,
      skills: 'react-native',
    },
    {
      id: 2,
      skills: 'Redux',
    },
    {
      id: 3,
      skills: 'react-icons',
    },
    {
      id: 4,
      skills: 'chart.js',
    },
    {
      id: 5,
      skills: 'context-api',
    }
  ]

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
            {webListData.map(data => <li key={data.id}>
              <p> &#9989;</p>
              <p>{data.skills}</p>
            </li>)}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development &#128241;</h3>
          </div>
          <ul className="service__list">
            {appListData.map(data => <li key={data.id}>
              <p> &#9989;</p>
              <p>{data.skills}</p>
            </li>)}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services