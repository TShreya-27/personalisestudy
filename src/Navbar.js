import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#F7CAC9" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Time-Table Icon" width="200" height="80" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Homepage.js" style={{ color: "#FEFEFA" }}>
                <span className="material-icons">home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Timetable.js" style={{ color: "#FEFEFA" }}>
                <span className="material-icons">schedule</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}