import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import hero_1 from "assets/images/hero/hero_1.jpg";
import hero_2 from "assets/images/hero/hero_2.jpg";
import hero_3 from "assets/images/hero/hero_3.jpg";

export default function Hero(props) {
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 1,
    },
  };

  return (
    <div className="md:mt-6">
      <AliceCarousel
        buttonsDisabled={true}
        mouseTrackingEnabled
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        responsive={responsive}
      >
        <img src={hero_1} className="hero md:px-10 md:h-64" alt="image1" />
        <img src={hero_2} className="hero md:px-10 md:h-64" alt="image2" />
        <img src={hero_3} className="hero md:px-10 md:h-64" alt="image3" />
      </AliceCarousel>
    </div>
  );
}
