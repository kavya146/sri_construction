import React from "react";
import "./Sidenav.css";
import { tabs } from "./configs";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div>
      <nav>
        {tabs.map((x) => (
          <Link to={`/${x.id}`} key={x.id} className="nav-margin font">
            {x.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidenav;
