import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
import Portfolio from "../images/porfolio.jpg"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
    <section className="hero">
      <img src={Portfolio} alt="My Image" style={{ borderRadius: "50%" }}/>
      <div className="hero-content">
        <h1>Passionate<br/> Web Developer</h1>
        <p>I am a web developer.. Will write more here.</p>
        <a className="action-btn" onClick={() => {
          window.open("mailto:anchit.thakur11@gmail.com")
        }}>Hire me</a>
      </div>
    </section>
)

export default IndexPage
