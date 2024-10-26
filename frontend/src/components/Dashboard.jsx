import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import "../resources/css/dashboard.css";
import { DEFAULT_SIDE_MENU } from "../Utils/Constants";

import { Link, Route, Routes } from "react-router-dom";
import Academics from "./Academics";
import Projects from "./Projects";
import Resume from "./Resume";
import SocialProfiles from "./SocialProfiles";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSideMenu } from "../redux/slices/navSlice";
import Home from "./Home";
import { useState } from "react";
import PageNotFound from "./PageNotFound";
export default function Dashboard() {

  //Pop Up Navigation
  const [isVisible, setIsVisible] = useState(false);
  const [centerIndex, setCenterIndex] = useState(0);
  var iconsCount = 0;
  const toggleIcons = () => {
    setIsVisible(!isVisible);
  };
  const dispatch = useDispatch();
  const handleIconClick = (index) => {
    console.log(index)
    setCenterIndex(index)
    dispatch(setActiveSideMenu({activeSideMenu:index}))
    toggleIcons();
  };

  
  
  const activeSideMenu = useSelector(
    (state) => state.navigation.activeSideMenu
  );


  return (
    <Box sx={{ display: "flex" }} className="MainContainer">
      <CssBaseline />
      <Box component="main" sx={{ pt: '7rem', overflow:'scroll'}}>
          <div className="MainComponent">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/social-profile" element={<SocialProfiles />} />
              <Route path="*" element={<PageNotFound/>} />
            </Routes>
          </div>
      </Box>

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
        {DEFAULT_SIDE_MENU[activeSideMenu].icon}
        {console.log(DEFAULT_SIDE_MENU[centerIndex])}
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

    </Box>
  );
}
