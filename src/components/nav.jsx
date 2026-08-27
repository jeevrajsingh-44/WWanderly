import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className='body'>
      <div className="left">
        <div className="image"><img src="/wanderlyLogo.png" alt="logo" /></div>
        <h1 className='title'>WWanderly</h1>
      </div>
      <div className="right">
        <h1>home</h1>
        <h1>about</h1>
        <h1>contact</h1>
      </div>
    </div>
  )
}

export default Nav
