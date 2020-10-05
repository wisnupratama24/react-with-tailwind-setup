import React, { useEffect } from "react";
import { Navbar, HeroDetail, Description, Reviews } from "components";
import landingPage from "json/landingPage.json";
import Content from "components/Content";
import Footer from "components/Footer";
export default function DetailPage() {
  useEffect(() => {
    document.title = "Detail Page";
  }, []);
  return (
    <>
      <Navbar />
      <HeroDetail />
      <Description data={landingPage.description} />
      <Reviews />

      <div className="flex justify-start flex-col mb-32">
        <p className="text-xl text-gray-500 font-medium hover:text-indigo-500  lg:mx-40 mx-0 pl-2 mt-10">
          Produk Serupa
        </p>

        <Content
          data={landingPage.product}
          isFilter={true}
          length={40}
          limit={4}
          type="DetailPage"
        />
      </div>
      <Footer />
    </>
  );
}
