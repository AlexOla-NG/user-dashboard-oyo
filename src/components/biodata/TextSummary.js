import React from "react";
import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

const LightText = styled(Typography)({
  color: "#9DA0A7",
  whiteSpace: "nowrap",
});

const outerWrapperStyles = {
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "0.5rem",
  "& p": {
    fontSize: "1.125rem",
  },
};

const innerWrapperStyles = {
  flexDirection: "row",
  alignItems: "center",
  // flexWrap: "wrap",
  gap: "0.5rem",
};

const TextSummary = (props) => {
  return (
    <Stack sx={outerWrapperStyles}>
      <Stack sx={innerWrapperStyles}>
        <LightText>Staff ID: </LightText>
        <Typography variant="body1">{props.staffId}</Typography>
      </Stack>
      <LightText>•</LightText>
      <Stack sx={innerWrapperStyles}>
        <LightText>Middle Name: </LightText>
        <Typography variant="body1">{props.middleName}</Typography>
      </Stack>
      <LightText>•</LightText>
      <Stack sx={innerWrapperStyles}>
        <LightText>Gender: </LightText>
        <Typography variant="body1">{props.gender}</Typography>
      </Stack>
    </Stack>
  );
};

export default TextSummary;

TextSummary.defaultProps = {
  staffId: "OYO/02/0399",
  middleName: "Dorcas",
  gender: "Female",
};
