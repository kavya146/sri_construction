import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="padding-top-btm">
      <div className="margin-left-rht disply-flex">
        <div className="margin-rht">
          <img src="https://www.credon.in/wp-content/uploads/2024/02/home-about-Img.png"></img>
        </div>
        <div className="about-display-direction">
          <div>
            <div className="about-head">
              <h1>About Us</h1>
            </div>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <div>
              <p style={{ fontSize: "larger" }}>
                Since 2023, Sri serinity home's mission is to provide clients
                with quality construction services, which add value to their
                projects. From planning through post construction, Sri serinity
                home's is committed to the project. We excels when working as
                part of a collaborative team to develop, design, and construct.
                Our clients participate in the process every step of the way,
                controlling the design, and achieving their goals for cost,
                schedule, and quality. Delivering quality projects on time and
                within budget is the cornerstone on which Sri serinity home's
                has built its reputation.
              </p>
            </div>
          </div>

          <div>
            <button className="btn-view-all">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
