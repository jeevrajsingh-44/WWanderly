import React, { useEffect } from 'react'
import './Booking.css'
import { useSearchParams, Link } from 'react-router-dom'

const Booking = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

      <Link to={`/booking/form?destination=${destination}&package=${packageName}&price=${price}`}>
        <button>Continue</button>
      </Link>

    </div>
  )
}

export default Booking