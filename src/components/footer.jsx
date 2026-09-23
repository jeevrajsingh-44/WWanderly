import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (<>
    <div className="navigation">
      <Link to="/">
          <h1>home</h1>
        </Link>
        <Link to="/about">
          <h1>about</h1>
        </Link>

        <Link to="/contact">
          <h1>contact</h1>
        </Link>
    </div>
    
    <div className="copyRights">
      © 2026 WWanderly. All rights reserved.
    </div>
  </>)
}

export default Footer