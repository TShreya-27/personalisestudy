import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Timetable from "./Timetable";
import TimetableOutput from "./Outputpage";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/output" element={<TimetableOutput />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
