import React from "react";
import SideLogo from "./logo/SideLogo";
import Sidenav from "./sidenav/Sidenav";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-style">
      <div>
        <SideLogo />
      </div>
      <div className="sidenav-style">
        <Sidenav />
      </div>
    </div>
  );
};

export default Header;
