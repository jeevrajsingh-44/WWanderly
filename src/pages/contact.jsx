import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className="contactpage">

      <div className="leftcontact">
        <h1>Contact Us</h1>

        <p>
          Have a question, need help planning your next adventure, or just
          want to say hello? We'd love to hear from you. Get in touch with
          Wanderly and let us know how we can make your travel experience
          better.
        </p>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="rightcontact">
        <img src="contact.png" alt="Travel" />

        <div className="contactinfo">
          <h2>Get In Touch</h2>
          <p>📧 hello@wanderly.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Hyderabad, India</p>
        </div>
      </div>

    </div>
  )
}

export default Contact


