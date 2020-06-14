import React from "react"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import "./layout.css"


const Layout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar/>
      <div className="content">
        <section className="main">
          {children}
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
