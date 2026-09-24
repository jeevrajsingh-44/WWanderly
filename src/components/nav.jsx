import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">

      <Link to="/" className="brand">
        <img src="/contact.webp" alt="logo" />
        <span>WWanderly</span>
      </Link>

      <div className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  )
}

export default Nav