import React from "react";
import "../resources/css/home.css";
import { Avatar, Button, Typography } from "@mui/material";
import { SOCIAL_MEDIA_ICONS } from "../Utils/Constants";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import dpImage from "../resources/images/dp_image.png";
import axios from "axios";

function Home() {
  const [userProfileDefaultData, setUserProfileDefaultData] = useState({});
  useEffect(() => {
    async function fetch_data() {
      try {
        console.log("inside fetch");
        const response = await axios.get(
          "http://localhost:13000/users/getData"
        );
        setUserProfileDefaultData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch_data();
  }, []);

  const [isSocialMediaIcon, setIsSocialMediaIcon] = useState(false);

  const handleSocialMediaIcon = () => {
    setIsSocialMediaIcon(!isSocialMediaIcon);
  };

  const userName = userProfileDefaultData.Name;
  return (
    <div className="mainContainer">
      <div className="details">
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Source Code Pro",
            WebkitTextStroke: "0.05rem black",
            color: "#544600",
          }}
        >
          HEY👋
          <Typography
            variant="h1"
            sx={{
              color: "#a79248",
              fontFamily: "Source Code Pro",
              fontSize: "4.5rem",
              fontWeight: "400",
              flex: "1 1 45%",
            }}
          >
            I'M {userName}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Source Code Pro",
              WebkitTextStroke: "0.05rem black",
              fontSize: "4.25rem",
              fontWeight: "400",
              display: "flex",
            }}
          >
            I'M A&nbsp;
            <Typewriter
              options={{
                strings: "STUDENT",
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Typography>
        <div className="icons">
          <Button
            variant="contained"
            onClick={handleSocialMediaIcon}
            sx={{
              borderRadius: "50rem",
              backgroundColor: "#a79248",
              
            }}
          >
            Get in touch{"->"}
          </Button>
          {SOCIAL_MEDIA_ICONS.map((data, index) => (
            <Link to={data.link} key={index}>
              <Avatar
                className={isSocialMediaIcon ? "visible" : ""}
                sx={{
                  color: "black",
                  backgroundColor: "#a79248",
                  cursor: "pointer",
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  opacity: isSocialMediaIcon? 1: 0,
                }}
              >
                {data.icon}
              </Avatar>
            </Link>
          ))}
        </div>
      </div>
      <Avatar
        src={dpImage}
        sx={{
          width: "27vw",
          height: "50vh",
          border: "5px solid #a79248",
          borderRadius: "20%",
          mr: "7vw",
        }}
        variant="square"
      />
    </div>
  );
}

export default Home;
