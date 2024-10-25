import React from "react";
import { DEFAULT_SIDE_MENU } from "../Utils/Constants";
import { useState } from "react";
import "../resources/css/resume.css";
import { Link } from "react-router-dom";

function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const [centerIndex, setCenterIndex] = useState(0);
  var iconsCount = 0;

  const toggleIcons = () => {
    console.log("center: "+ centerIndex)
    setIsVisible(!isVisible);
  };

  const handleIconClick = (index) => {
    console.log(index)
    setCenterIndex(index);
    toggleIcons();
  };
  return (
    <div
      className="navIconsContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={`default-icon center-icon visible`}
        onClick={toggleIcons}
        key={centerIndex}
      >
        {DEFAULT_SIDE_MENU[centerIndex].icon}
      </div>
      {DEFAULT_SIDE_MENU.map((data, index) => {
        
        if (index === centerIndex) return null; 
        iconsCount++;
        return (
          <div
            className={`default-icon ${
              iconsCount < 3 ? "left-icon" : "right-icon"
            } ${isVisible ? "visible" : ""}`}
            key={index}
            onClick={() => handleIconClick(index)}
            style={{
              "--index": iconsCount, 
            }}
          >
            <Link to={data.link} className="navLinks">
            {data.icon}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Resume;
