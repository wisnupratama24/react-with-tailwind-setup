import React, { useEffect } from "react";
import { Navbar, Hero, Category, Content, Footer } from "components";
import landingPage from "json/landingPage.json";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Landing Page | STADME";
  }, []);

  return (
    <>
      <Navbar />
      <Hero data={landingPage.hero} />
      <Category data={landingPage.category} />
      <Content
        data={landingPage.product}
        length={40}
        limit={18}
        type="LandingPage"
      />
      <Footer />
    </>
  );
}
