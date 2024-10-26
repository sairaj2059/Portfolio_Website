import { DownloadOutlined, EyeFilled } from "@ant-design/icons";
import { Box, Typography } from "@mui/material";
import { Button } from "antd";
import React from "react";
import "../resources/css/resume.css";

function Resume() {
  const downloadPdf = async () => {
    try {
      const response = await fetch("http://localhost:13000/downloadPdf");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "file.pdf";

      document.body.appendChild(a);
      a.click();

      // Clean up
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "50vh",
          display: "flex",
          flexWrap: "wrap",
          alignContent:'center',
          justifyContent: "center",
          gap:'2rem'
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "60px", textAlign: "center" }}>
          "Let's build something great! Checkout my resume to explore my
          expertise and how <br />{" "}
          <Typography
            variant="h2"
            sx={{
              color: "#a79248",
              fontFamily: "Source Code Pro",
              fontWeight: "400",
              WebkitTextStroke: "0.05rem black",
            }}
          >
            {`I can contribute to your success!"`.toUpperCase()}
          </Typography>
        </Typography>

        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size={"large"}
            onClick={downloadPdf}
            style={{
              background: "#a79248",
              ":hover": { color: "red" },
            }}
          >
            Download
          </Button>
          <Button
            type="primary"
            shape="round"
            icon={<EyeFilled />}
            size={"large"}
            onClick={downloadPdf}
            style={{
              background: "#a79248",
              "&:hover": { background: "#c8ad51c" },
            }}
          >
            View
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Resume;
