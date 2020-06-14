import Layout from "../components/layout"
import React from "react"
import ProjectSvg from "../images/assets/projects.svg"
import "../components/projects.css"
import NextJs from "../images/assets/nextjs.svg"
import NodeSvg from "../images/assets/nodejs.svg"
import MongoSvg from "../images/assets/mongodb.svg"
import BootstrapSvg from "../images/assets/bootstrap.svg"
import ExpressSvg from "../images/assets/expressjs.svg"
import ReactSvg from "../images/assets/reactJs.svg"
// import News from "../images/News.png"

export default () => {
  console.log(ReactSvg)
  return (
    <>
      <div className="flex-container">
        <ProjectSvg/>
        <h1> Projects </h1>
      </div>
      <div className="flex-container" style={{padding:'20px',height:'400px', overflow:'auto'}}>
        <div className="card">
          <a target="_blank" href='https://moowe.herokuapp.com'>Moowe</a><br/>
          This website is a catalogue of Movies and TV shows made with a unified search approach.
          <div className="flex-container">
            <NextJs/>
            <BootstrapSvg/>
            <ExpressSvg/>
            <NodeSvg/>
            <MongoSvg/>
          </div>
        </div>
        <div className="card">
          <a target="_blank" href='https://nextjs.anchitthakur11.now.sh/ApiPages'>News</a><br/>
          This is an isomorphic website made using next.js that I made during my time as an intern in the PWA
          team at IndiaMART.

          <div className="flex-container" style={{marginTop:'10px'}}>
            <NextJs/>
            <BootstrapSvg/>
          </div>
        </div>
        <div className="card">
          <a target="_blank" href='https://holidaycalender.anchitthakur11.now.sh/'>Holiday Calender</a><br/>
          I made this website for a freelance job that I was hired for. It's a simple react application which
          tells you about upcoming and past holidays and whether it's a holiday today.

          <div className="flex-container" style={{marginTop:'10px'}}>
            <ReactSvg/>
            <BootstrapSvg/>
          </div>
        </div>
      </div>
    </>
  )
}
