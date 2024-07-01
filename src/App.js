import "./App.css";
import React from "react";
import Navbar from "./Navbar.js";
import Homepage from "./Homepage.js";
import Footer from "./Footer.js";
import Timetable from "./Timetable.js";
import Outputpage from "./Outputpage.js";
// import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
      <Timetable />
      <Outputpage />
    </div>
  );
}
