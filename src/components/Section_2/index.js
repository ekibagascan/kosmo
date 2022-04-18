import React from "react";
import {
  HeroContainer,
  HeroContent,
  BigH1,
  HeroH1,
  HeroBg,
  ImageBg,
  SocialIconLink,
  SocialIcons,
} from "./HeroElements";
import { Grid, Typography, Divider } from "@mui/material";
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

import bg from "../../images/section2bg.png";
import logo from "../../images/whitelogo.png";

const Section_2 = () => {
  return (
    <HeroContainer id="sectionTwo">
      <HeroBg>
        <ImageBg src={bg} alt="bg" />
      </HeroBg>
      <HeroContent>
        <BigH1>KOSMO</BigH1>
        <HeroH1>FULL METAL RABBIT</HeroH1>
        <Grid
          alignItems="center"
          justifyContent="space-between"
          sx={{ display: "flex", marginTop: "35px" }}
        >
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" arial-label="Discord">
              <FaDiscord />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Telegram">
              <FaTelegram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
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

export default Section_2;
