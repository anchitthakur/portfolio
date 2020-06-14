import Layout from "../components/layout"
import React from "react"
import ProjectSvg from "../images/assets/projects.svg"
import "../components/projects.css"
import Moowe from "../images/moowe.png"
import News from "../images/News.png"

export default () => {
  return (
    <>
      <div className="flex-container">
        <ProjectSvg/>
        <h1> Projects </h1>
      </div>
      <div className="flex-container">
        <ul>
          <li>
            <a target="_blank" href='https://moowe.herokuapp.com'>Moowe</a>
            <ul>
              <li>This website is a catalogue of Movies and TV shows made with a unified search approach.</li>
              <li>Tech Stack:</li>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </ul>
          </li>
          <li>
            <a target="_blank" href='https://nextjs.anchitthakur11.now.sh/ApiPages'>News</a>
            <ul>
              <li>This is an isomorphic website made using next.js that I made during my time as an intern in the PWA
                team at IndiaMART.
              </li>
              <li>Tech Stack:</li>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
              </ul>
            </ul>
          </li>
          <li>
            <a target="_blank" href='https://holidaycalender.anchitthakur11.now.sh/'>Holiday Calender</a>
            <ul>
              <li>I made this website for a freelance job that I was hired for. It's a simple react application which
                tells you about upcoming and past holidays and whether it's a holiday today.
              </li>
              <li>Tech Stack:</li>
              <ul>
                <li>React</li>
                <li>Reactstrap</li>
              </ul>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}
