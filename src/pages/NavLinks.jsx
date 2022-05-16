import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"

const NavLinks = () => {
  return (
  <Router>
    <Link to="/" className="nav-link"> Home </Link>
    <Link to="/" className="nav-link"> Account </Link>
    <Link to="/" className="nav-link"> Settings </Link>
  </Router>
  )
}

export default NavLinks