import React from "react";

import myImage from "./image.jpg"
import "./About.style.css"

const About = () => {
  return (
    <div className="about">
      <figure>
        <img src={myImage} />
      </figure>
      <h2>محمدرضا عسگری</h2>
    </div>
  );
};

export default About;
