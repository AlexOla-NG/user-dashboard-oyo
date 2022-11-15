import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ReactComponent as HeroImg } from "../assets/images/hero.svg";

const WhiteTypography = styled(Typography)({
  color: "#fff",
});

const Hero = () => {
  const simpleSteps = [
    { text: "Verify your identity", icon: <CheckCircleOutlineIcon /> },
    { text: "Upload your Photo", icon: <CheckCircleOutlineIcon /> },
    { text: "Submit", icon: <CheckCircleOutlineIcon /> },
  ];

  const boxWrapperStyles = {
    background: "linear-gradient(112.14deg, #CE5151 -29.7%, #910000 70.3%)",
    py: { xs: "4rem", md: "8rem" },
    px: { xs: "3rem", md: "7rem" },
  };

  const stackWrapperStyles = (theme) => ({
    alignItems: { xs: "center", md: "normal" },
    gap: "2rem",

    [theme.breakpoints.up("2500")]: {
      transform: "translateY(50%)",
    },
  });

  const boxTypographyStyles = {
    maxWidth: { xs: "100%", md: "80%" },
  };

  const stackTypographyWrapper = {
    gap: "2rem",
    textAlign: { xs: "center", md: "left" },
  };

  const stackListWrapper = {
    gap: "1rem",
  };

  return (
    <Box sx={boxWrapperStyles}>
      <Stack sx={stackWrapperStyles}>
        <Stack sx={stackTypographyWrapper}>
          <WhiteTypography variant="h1">Welcome</WhiteTypography>
          <Box sx={boxTypographyStyles}>
            <WhiteTypography variant="body1">
              Get your data captured in less than 5 minutes by entering your
              name and phone number, and we'll have you all set in no time.
            </WhiteTypography>
          </Box>
        </Stack>
        <HeroImg viewBox="0 0 290 170" />

        <Stack sx={stackListWrapper}>
          <WhiteTypography variant="h2">Three Simple Steps</WhiteTypography>
          <List>
            {simpleSteps.map((step) => {
              const { text, icon } = step;
              return (
                <ListItem key={text} disablePadding>
                  <ListItemIcon sx={{ color: "#F4BA03" }}>{icon}</ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ color: "#fff" }}
                    primary={text}
                  />
                </ListItem>
              );
            })}
          </List>
          <WhiteTypography variant="body2">
            <em>We'll take care of the rest for you...</em>
          </WhiteTypography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
