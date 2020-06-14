import React from "react"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import "./layout.css"

const Layout = (props) => {
  console.log(props)
  return (
    <div className="container">
      <Sidebar location={props.uri}/>
      <div className="content">
        <section className="main">
          {props.children}
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
