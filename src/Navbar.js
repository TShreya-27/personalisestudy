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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "#FEFEFA" }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#FEFEFA" }}>
                <span className="material-icons">home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/timetable" style={{ color: "#FEFEFA" }}>
                <span className="material-icons">schedule</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}