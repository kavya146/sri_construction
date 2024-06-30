import React from "react";
import HouseVideo from "../houseVideo/HouseVideo";
import About from "../about/About";
import MainCarousel from "../main_carousel/carousel";

const Main = () => {
  return (
    <div>
      <MainCarousel />
      <About />
      <HouseVideo />
    </div>
  );
};

export default Main;
