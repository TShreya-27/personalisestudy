import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Timetable from "./Timetable";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/timetable" component={Timetable} />
      </Switch>
    </Router>
  );
}

export default App;