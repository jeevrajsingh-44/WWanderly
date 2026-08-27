import React from 'react'
import './home.css'

const Home = () => {
  return (<>

    <div className="hero">
      <div className='heroLeft'>
        <h1>Explore the world with <span>Wanderly</span></h1>
        <p>Discover beautiful places and plan your next adventure.</p>
        <button className='heroBtn'>Explore ⤏</button>
      </div>

      <div className='heroRight'>
        <img src="hero.png" alt="travel" />
      </div>
    </div>

    <hr></hr>

    <h2 className="section2Title">Why&nbsp;<span>Wanderly</span>&nbsp;?</h2>

    <div className="whyWanderly">

      <div className="feature discover">
        <img src="/discover.png" alt="Discover" />
        <h3>Discover</h3>
      </div>

      <div className="feature plan">
        <img src="/plan.png" alt="Plan" />
        <h3>Plan</h3>
      </div>

      <div className="feature enjoy">
        <img src="/enjoy.png" alt="Enjoy" />
        <h3>Enjoy</h3>
      </div>

    </div>

    <hr></hr>

    <section className="popularDestinations">
      <h2>Popular Destinations</h2>

      <div className="destinationCards">

        <div className="destinationCard">
          <img src="/goa.png" alt="Goa" />
          <h3>Goa</h3>
        </div>

        <div className="destinationCard">
          <img src="/paris.png" alt="Paris" />
          <h3>Paris</h3>
        </div>

        <div className="destinationCard">
          <img src="/bali.png" alt="Bali" />
          <h3>Bali</h3>
        </div>

        <div className="destinationCard">
          <img src="/dubai.png" alt="Dubai" />
          <h3>Dubai</h3>
        </div>

      </div>
    </section>
  </>)
}

export default Home