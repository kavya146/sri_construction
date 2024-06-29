import React from "react";
import "./Sidenav.css";
import { tabs } from "./configs";

const Sidenav = () => {
  return (
    <div>
      {tabs.map((x, index) => (
        <a key={index} className="nav-margin font">
          {x}
        </a>
      ))}
    </div>
  );
};

export default Sidenav;
