import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Timetable from "./Timetable";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" component={Homepage} />
        <Route path="/timetable" component={Timetable} />
      </Routes>
    </Router>
  );
}

export default App;