import React, { useEffect } from 'react'
import { DEFAULT_ACTIVE_PAGE, DEFAULT_SIDE_MENU } from '../Utils/Constants'
import { useState } from 'react';
import "../resources/css/resume.css"
import { Link } from 'react-router-dom';

function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const [centerIndex, setCenterIndex] = useState(0);

  // const handleSwap = (index)=>{
  //     setCenterIndex(index)
  // }

  const handleIconClick = (index) => {
    console.log(centerIndex, index)
    if (index !== centerIndex) {
      setCenterIndex(index); // Update the center index with the clicked icon's index
    }
  };
  const toggleIcons = () => {
    console.log(isVisible)
    setIsVisible(!isVisible);
  };
  return (
    <div className="navIconsContainer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div
        className={`default-icon center-icon ${isVisible ? 'visible' : ''}`}
        onClick={toggleIcons}
      >
        {DEFAULT_SIDE_MENU[centerIndex].icon}{centerIndex}
      </div>

      {DEFAULT_SIDE_MENU.map((data, index) =>
        index !== centerIndex ? (
          // <Link className="sideMenuLinks"to={data.link} >
          <div
            className={`default-icon ${
              index < 3 ? "left-icon" : "right-icon"
            } ${isVisible ? 'visible' : ''}`}
            key={index}
            onClick={() => handleIconClick(index)}
            style={{ "--index": index }}
          >
            {data.icon}{index}
          </div>
          // </Link>
        ) : null 
      )}
    </div>
  )
}

export default Resume