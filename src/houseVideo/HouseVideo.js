import React from "react";
import "./HouseVideo.css";

const HouseVideo = () => {
  return (
    <div className="video-centre">
      <iframe
        width="760"
        height="315"
        src="https://www.youtube.com/embed/eUaeNzNcMD4?si=JqxIt9Qg1gy7jpFv"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default HouseVideo;
