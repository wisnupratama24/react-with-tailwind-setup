import React, { Component } from "react";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import landingPage from "json/landingPage.json";
import Category from "components/Category";
import Content from "components/Content";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar />
          <Hero data={landingPage.hero} />
          <Category data={landingPage.category} />
          <Content data={landingPage.product} />
        </div>
      </>
    );
  }
}
