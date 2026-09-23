import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (<>

    <div className="hero">
      <div className='heroLeft'>
        <h1>Explore the world with <span>Wanderly</span></h1>
        <p>Discover beautiful places and plan your next adventure.</p>
        <Link to="/explore" className="heroBtn">Explore ⤏</Link>
      </div>

      <div className='heroRight'>
        <img src="hero.png" alt="travel" />
      </div>
    </div>

    <hr></hr>

    <h2 className="section2Title">Why&nbsp;<span>Wanderly</span>&nbsp;?</h2>

    <div className="whyWanderly">

      <div className="feature discover">
        <img src="/discover.webp" alt="Discover" />
        <h3>Discover</h3>
      </div>

      <div className="feature plan">
        <img src="/plan.webp" alt="Plan" />
        <h3>Plan</h3>
      </div>

      <div className="feature enjoy">
        <img src="/enjoy.webp" alt="Enjoy" />
        <h3>Enjoy</h3>
      </div>

    </div>

    <hr></hr>

    <section className="popularDestinations">
      <h2>Popular Destinations</h2>

      <div className="destinationCards">

        <div className="destinationCard">
          <img src="/goa.webp" alt="Goa" />
          <h3>Goa</h3>
        </div>

        <div className="destinationCard">
          <img src="/paris.webp" alt="Paris" />
          <h3>Paris</h3>
        </div>

        <div className="destinationCard">
          <img src="/bali.webp" alt="Bali" />
          <h3>Bali</h3>
        </div>

        <div className="destinationCard">
          <img src="/dubai.webp" alt="Dubai" />
          <h3>Dubai</h3>
        </div>

      </div>
    </section>
  </>)
}

export default Home
