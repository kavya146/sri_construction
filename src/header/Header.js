import React, { useState } from "react";
import SideLogo from "./logo/SideLogo";
import Sidenav from "./sidenav/Sidenav";
import "./Header.css";
import SideNavIcon from "./sidenav/SideNavIcon";

const Header = () => {
  const [visible, setVisible] = useState("false");

  const toggleSidenav = () => {
    setVisible(!visible);
  };

  return (
    <div className="header-style">
      <div style={{ display: "flex", alignItems: "center" }}>
        <SideLogo />
      </div>
      <div className="sidenav-icon" onClick={toggleSidenav}>
        <SideNavIcon />
      </div>
      {visible && (
        <div className="sidenav-style">
          <Sidenav />
        </div>
      )}
    </div>
  );
};

export default Header;
