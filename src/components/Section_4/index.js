import React from "react";
import {
  HeroContainer,
  TopLeft,
  ScifiBox,
  HeroContent,
  HeroH1,
} from "./HeroElements";
import { Grid, Typography, Divider } from "@mui/material";
import { BsQuestionCircle } from "react-icons/bs";

import logobg from "../../images/navbarlogo.png";
import redlogo from "../../images/smallredlogo.png";
import logo from "../../images/whitelogo.png";

const Section_4 = () => {
  return (
    <HeroContainer id="sectionTwo">
      <TopLeft>
        <img src={logobg} alt="logobg" />
      </TopLeft>
      <HeroContent>
        <Grid
          sx={{
            display: "flex",
          }}
        >
          <ScifiBox
            variant="h4"
            sx={{
              color: "#fff",
              marginRight: "15px",
              fontWeight: "bold",
              fontFamily: "Anton",
            }}
          >
            LOGIN
          </ScifiBox>
          <img src={redlogo} alt="redlogo" />
        </Grid>
        <Grid
          alignItems="center"
          sx={{
            textAlign: "left",
            marginTop: "100px",
            width: "900px",
            display: "flex",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", textDecoration: "underline" }}
          >
            CONNECT YOUR WALLET{" "}
          </Typography>
          <BsQuestionCircle
            style={{ fontSize: "20px", color: "#fff", marginLeft: "5px" }}
          />
        </Grid>
        <Grid
          sx={{
            backgroundColor: "#3F3F3F",
            width: "900px",
            textAlign: "center",
            marginBottom: "250px",
          }}
        >
          <Typography variant="h1" sx={{ color: "#fff", fontWeight: 900 }}>
            METAMASK
          </Typography>
        </Grid>

        <HeroH1>FULL METAL RABBIT</HeroH1>
        <Grid
          alignItems="center"
          justifyContent="space-between"
          sx={{ display: "flex" }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              marginLeft: "15px",
              fontWeight: "light",
            }}
          >
            MAY 05
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{
              backgroundColor: "#fff",
              height: "40px",
              marginRight: "10px",
              marginLeft: "12px",
            }}
          />
          <img src={logo} alt="smashndasm" height={50} />
        </Grid>
      </HeroContent>
    </HeroContainer>
  );
};

export default Section_4;
