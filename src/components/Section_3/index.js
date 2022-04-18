import React from "react";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  TopLeft,
  ScifiBox,
} from "./HeroElements";
import { Grid } from "@mui/material";

import sneakpeak from "../../images/sneakpeak.png";
import logobg from "../../images/navbarlogo.png";
import redlogo from "../../images/smallredlogo.png";

const Section_3 = () => {
  return (
    <HeroContainer id="sectionTwo">
      <HeroBg>
        <ImageBg src={sneakpeak} alt="sneakpeak" />
      </HeroBg>
      <TopLeft>
        <img src={logobg} alt="logobg" />
      </TopLeft>
      <Grid
        sx={{
          display: "flex",
          zIndex: 3,
          position: "absolute",
          top: "138px",
          left: "180px",
          transform: "rotate(-8deg)",
        }}
      >
        <ScifiBox
          variant="h4"
          sx={{
            color: "#fff",
            marginRight: "15px",
            fontWeight: "light",
          }}
        >
          SNEAK PREVIEW
        </ScifiBox>
        <img src={redlogo} alt="redlogo" />
      </Grid>
    </HeroContainer>
  );
};

export default Section_3;
