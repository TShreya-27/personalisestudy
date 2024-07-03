import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import Homepage from "./Homepage.js";
import Timetable from "./Timetable.js";
import Outputpage from "./Outputpage.js";
import Footer from "./Footer.js";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Homepage />;
      case "timetable":
        return <Timetable setActiveComponent={setActiveComponent} />;
      case "output":
        return <Outputpage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
      <Footer />
    </div>
  );
}
