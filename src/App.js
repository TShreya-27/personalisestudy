import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Timetable from "./Timetable";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Homepage" component={Homepage} />
          <Route path="/Timetable" component={Timetable} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;