import React from 'react'
import './footer.css'

const Footer = () => {
  return (<>
    <div className="navigation">
      <h1>home</h1>
      <h1>about</h1>
      <h1>contact</h1>
    </div>
    <div className="social">
      <a href="https://github.com/jeevrajsingh-44"><img src="githubLogo.webp" alt="github" /></a>
      <a className="leetcode" href="https://leetcode.com/u/jeevraj_singh/"><img src="leetcodeLogo.webp" alt="leetcode" /></a>
      <a className="linkedin" href="https://www.linkedin.com/in/jeevraj-singh-965160372/"><img src="linkedinLogo.webp" alt="linkedin" /></a>
    </div>
    <div className="copyRights">
      © 2026 WWanderly. All rights reserved.
    </div>
  </>)
}

export default Footer