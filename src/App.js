import React from "react";
import "assets/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage, FilterPage, DetailPage } from "pages";

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/filter" component={FilterPage} />
        <Route exact path="/detail" component={DetailPage} />
      </Router>
    </div>
  );
}

export default App;
