import { DownloadOutlined } from "@ant-design/icons";
import { Typography } from "@mui/material";
import { Button } from "antd";
import React, { useEffect } from "react";
import '../resources/css/resume.css'

function Resume() {
  const downloadPdf = () => {
    fetch("http://localhost:13000/downloadPdf")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "file.pdf";
        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  return (
    <>
      <div className="resumeContainer">
        <Typography variant="h2" sx={{ fontSize:'60px', textAlign:'center'}}>
          "Let's build something great! Download my resume to explore my
          expertise and how <br /> <Typography variant="h2" sx={{
            color: "#a79248",
            fontFamily: "Source Code Pro",
            fontWeight: "400",
            WebkitTextStroke: "0.05rem black"
          }}>{"I can contribute to your success!".toUpperCase()}</Typography>
        </Typography>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size={"large"}
          onClick={downloadPdf}
          style={{background:'#a79248', '&:hover':{background:'#c8ad51c'}}}
        >
          Download
        </Button>
      </div>
    </>
  );
}

export default Resume;
