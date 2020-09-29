import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Hero({ data }) {
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 1,
    },
  };

  return (
    <div className="mt-6">
      <AliceCarousel
        buttonsDisabled={true}
        mouseTrackingEnabled
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        responsive={responsive}
      >
        {data.map((item, index) => {
          return (
            <img
              key={`image-hero-${index}`}
              src={item.url}
              className="hero md:px-10 md:h-64"
              alt={`hero-${index}`}
            />
          );
        })}
      </AliceCarousel>
    </div>
  );
}
