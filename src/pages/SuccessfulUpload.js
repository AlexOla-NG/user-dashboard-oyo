import React from "react";
import styled from "@emotion/styled";
import { Button, Container, Stack, Typography } from "@mui/material";

import SuccessAnimation from "../assets/images/success_animation.gif";

const LightText = styled(Typography)({
  color: "#6B6C7E",
});

const stackOuterWrapper = {
  alignItems: "center",
  gap: "3rem",
};

const stackTypographyWrapper = {
  alignItems: "center",
  color: "#272833",
  gap: "1rem",
  textAlign: "center",
  "& h1": {
    fontSize: "1.875rem",
    textTransform: "capitalize",
  },
  "& p": {
    fontSize: "1.25rem",
  },
};

const stackImageWrapper = {
  alignItems: "center",
  gap: "2rem",
};

const imgStyles = {
  maxWidth: "15rem",
};

const SuccessfulUpload = ({ setAuth }) => {
  const handleClick = () => {
    localStorage.removeItem("auth_token");
    setAuth((prevValue) => !prevValue);
  };

  return (
    <Container maxWidth="md">
      <Stack sx={stackOuterWrapper}>
        <Stack sx={stackImageWrapper}>
          <img src={SuccessAnimation} alt="successful gif" style={imgStyles} />
          <Stack sx={stackTypographyWrapper}>
            <Typography variant="h1">
              you have successfully uploaded your passport
            </Typography>
            <LightText>Awaiting approval from admin</LightText>
          </Stack>
        </Stack>
        <Button variant="contained-alt" onClick={handleClick}>
          Done
        </Button>
      </Stack>
    </Container>
  );
};

export default SuccessfulUpload;
