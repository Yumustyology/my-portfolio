import React from "react";
import Slider from "react-slick";
import { marqueeData } from "../assets/js/marqueeData";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../styles/marquee.css";

function Marquee({ rtl }) {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    infinite: true,
    rtl: rtl,
  };
  return (
    <div>
      <Slider {...settings} className="slider-container">
        {marqueeData.map((data,i) => (
          <div className="marquee-data" style={{display:"flex",alignItems:"center"}} key={i}>
            <div>{data.icon}</div>&nbsp; <div>{data.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Marquee;
