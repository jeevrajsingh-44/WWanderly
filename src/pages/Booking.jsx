import React from 'react'
import './Booking.css'
import { useSearchParams } from 'react-router-dom'

const Booking = () => {
  const [searchParams] = useSearchParams()

  const destination = searchParams.get('destination')
  const packageName = searchParams.get('package')
  const price = searchParams.get('price')

  return (
    <div className="bookingpage">

      <h1>Book Your Trip</h1>

      <div className="selectedpackage">
        <h2>{destination}</h2>
        <h3>{packageName}</h3>
        <h4>{price}</h4>
      </div>

      <form className="bookingform">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <input
          type="number"
          placeholder="Number of People"
        />

        <input
          type="date"
        />

        <button type="submit">Confirm Booking</button>

      </form>

    </div>
  )
}

export default Booking