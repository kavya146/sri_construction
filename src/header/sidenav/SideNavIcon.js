import React, { useState } from "react";
import "./Sidenav.css";
import { tabs } from "./configs";

const SideNavIcon = () => {
  const [isOpen, setIsOpen] = useState("false");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="sidenav-icon-style" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={isOpen ? "menu-open" : "menu"}>
        <ul>
          {tabs.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavIcon;
