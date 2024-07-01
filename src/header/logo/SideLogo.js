import React from "react";
import "./SideLogo.css";

const SideLogo = () => {
  const publicPath = process.env.PUBLIC_URL;
  return (
    <div>
      <img
        className="sidenav-logo"
        src={`${publicPath}/sriHomesLogo.jpg`}
      ></img>
    </div>
  );
};

export default SideLogo;
