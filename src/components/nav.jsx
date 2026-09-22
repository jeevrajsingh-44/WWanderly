import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='body'>
      <div className="left">
        <div className="image"><img src="/wanderlyLogo.webp" alt="logo" /></div>
        <h1 className='title'>WWanderly</h1>
      </div>
      <div className="right">
        <Link to="/">
            <h1>home</h1>
        </Link>
        <h1>about</h1>
        <h1>contact</h1>
      </div>
    </div>
  )
}

export default Nav
