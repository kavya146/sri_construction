import React, { useState } from "react";
import "./Sidenav.css";
import { tabs } from "./configs";
import { Link } from "react-router-dom";

const SideNavIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="sidenav-icon-style" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={isOpen ? "menu-open" : "menu"}>
        <nav>
          <ul>
            {tabs.map((x) => (
              <li key={x.id}>
                <Link to={`/${x.id}`}>{x.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavIcon;
