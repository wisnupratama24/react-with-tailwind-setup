import React, { Component } from "react";
import { Filter, Navbar, Footer, Content } from "components";
import landingPage from "json/landingPage.json";

export default class FilterPage extends Component {
  componentDidMount() {
    document.title = "Filter";
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="relative lg:p-10 grid lg:grid-cols-6 grid-cols-1">
          <div className="col-span-1 md:px-10 md:py-5 px-2 pt-2">
            <Filter data={landingPage.category} />
          </div>
          <div className="content col-span-5">
            <Content
              data={landingPage.product}
              isFilter={true}
              length={40}
              limit={15}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
