import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='aboutpage'>
      <div className="leftabout">
        <h1>About Us</h1>
        <p>Wanderly is more than just a travel platform. It is a place built for explorers, dreamers, and anyone who believes the best memories are made somewhere new. From breathtaking destinations and vibrant cities to hidden getaways and unforgettable experiences, Wanderly brings the world closer to you in one simple and inspiring space. Whether you are planning your next big adventure or simply searching for a place that sparks your imagination, Wanderly is here to turn that curiosity into a journey worth remembering.
        </p>
        <button className="learnmore">Learn More</button>
      </div>
      <div className="rightabout">
        <img src="about.webp" alt="image" className="image" />
      </div>
    </div>
  )
}

export default About
