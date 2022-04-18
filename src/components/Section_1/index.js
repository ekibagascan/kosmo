import React from "react";
import { HeroContainer, HeroContent, HeroH1 } from "./HeroElements";
import { Grid, Typography } from "@mui/material";
import logo from "../../images/flower.png";

const Section_1 = () => {
  return (
    <HeroContainer id="sectionOne">
      <HeroContent>
        <HeroH1>CONFIDENTIAL & PROPRIETARY</HeroH1>
        <HeroH1>OVERVIEW</HeroH1>
        <HeroH1>ALL COPYRIGHTS RESERVED</HeroH1>
        <Grid
          alignItems="center"
          justifyContent="space-between"
          sx={{ display: "flex", marginTop: "200px" }}
        >
          <img src={logo} alt="smashndasm" />
          <Typography
            variant="h5"
            sx={{ color: "#8EB4CB", marginLeft: "10px" }}
          >
            SMASHCHAIN
          </Typography>
        </Grid>
      </HeroContent>
    </HeroContainer>
  );
};

export default Section_1;
