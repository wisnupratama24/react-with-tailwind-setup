import React from "react";
import "assets/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage, FilterPage } from "pages";

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/filter" component={FilterPage} />
      </Router>
    </div>
  );
}

export default App;
