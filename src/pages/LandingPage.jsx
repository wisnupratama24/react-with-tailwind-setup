import React, { Component } from "react";
import Navbar from "components/Navbar";
import Hero from "components/Hero";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar />
          <Hero />
        </div>
      </>
    );
  }
}
