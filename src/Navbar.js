import React, { useState } from "react";
import logo from "./logo.png";
import Homepage from "./Homepage";
import Timetable from "./Timetable";
import "./App.css";

export default function Navbar() {
  const [activeComponent, setActiveComponent] = useState("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Homepage />;
      case "timetable":
        return <Timetable />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <button
          className="navbar-brand btn"
          onClick={() => setActiveComponent("home")}
        >
          <img src={logo} alt="Time-Table logo" className="logo" />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button
                className="nav-link btn"
                onClick={() => setActiveComponent("home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn"
                onClick={() => setActiveComponent("timetable")}
              >
                Generate Time-Table
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div>{renderComponent()}</div>
    </div>
  );
}
