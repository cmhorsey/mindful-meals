import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">mindfulMeals</a>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              |Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/food-log">
              🍕|Meal Log
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/fast-tracker">
              ⏳|Fast Tracker
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
