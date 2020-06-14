import React from "react"
import LinkedInSvg from '../images/assets/linkedIn.svg'
import GithubSvg from '../images/assets/github.svg'
import FacebookSvg from '../images/assets/facebook.svg'

const Footer = () => (
  <div className="footer">
    <footer>
      <ul>
        <li><a target="_blank" href="https://www.linkedin.com/in/anchit-thakur-653743199">

          <LinkedInSvg />
          <p>LinkedIn</p></a></li>
        <li><a target="_blank" href="https://github.com/anchitthakur/">
          <GithubSvg />
          <p>GitHub</p></a></li>
        <li><a target="_blank" href="https://www.facebook.com/anchit99">
          <FacebookSvg />
          <p>Facebook</p></a></li>
      </ul>
    </footer>
  </div>
)

export default Footer;
