import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

const Sidebar = (props) => {
  const url = typeof window !== "undefined" ? window.location.pathname : ""
  console.log(url)
  let action
  let oppAction
  if (document.documentElement.clientWidth > 1040) {
    action = "up"
    oppAction = "down"
  } else {
    action = "left"
    oppAction = "right"
  }
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link swipe direction={oppAction} to={"/"} entryOffset={100} activeClassName="active">About</Link></li>
          <li><Link swipe direction={url === "/" ? action : oppAction} to={"/projects"} entryOffset={100}
                    activeClassName="active">Projects</Link>
          </li>
          <li><Link swipe direction={action} to={"/page-2"} entryOffset={100} activeClassName="active">Experience</Link>
          </li>
          <li><Link swipe direction={action} to={"/page-2"} entryOffset={100} activeClassName="active">Languages</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Sidebar
