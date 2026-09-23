import React, { useState } from 'react'
import './Booking.css'

const BookingForm = () => {
    const [submitted, setSubmitted] = useState(false)

    return (
        <div className="bookingpage">

            {submitted === false ? (
                <form
                    className="bookingform"
                    onSubmit={(e) => {
                        e.preventDefault()
                        setSubmitted(true)
                    }}
                >

                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                    />

                    <input
                        type="number"
                        placeholder="Number of People"
                        required
                    />

                    <input
                        type="date"
                        required
                    />

                    <button type="submit">Confirm Booking</button>

                </form>
            ) : (
                <div className="confirmation">
                    <h2>Booking Confirmed!</h2>
                    <p>Your trip has been successfully booked.</p>
                </div>
            )}

        </div>
    )
}

export default BookingForm