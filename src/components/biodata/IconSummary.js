import React from "react";
import { Stack, Typography } from "@mui/material";

import { ReactComponent as LocationPin } from "../../assets/images/location pin.svg";
import { ReactComponent as Balloon } from "../../assets/images/balloon.svg";
import { ReactComponent as Calendar } from "../../assets/images/calendar.svg";

const outerWrapperStyles = {
  borderTop: "1px solid #E5E5EA",
  flexDirection: "row",
  alignItems: "center",
  gap: "3rem",
  paddingTop: "0.7rem",
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

const IconSummary = (props) => {
  return (
    <Stack sx={outerWrapperStyles}>
      <Stack sx={innerWrapperStyles}>
        <LocationPin />
        <Typography>{props.address}</Typography>
      </Stack>
      <Stack sx={innerWrapperStyles}>
        <Balloon />
        <Typography>Born {props.birthday}</Typography>
      </Stack>
      <Stack sx={innerWrapperStyles}>
        <Calendar />
        <Typography>Joined {props.resumed} (6 years)</Typography>
      </Stack>
    </Stack>
  );
};

export default IconSummary;

IconSummary.defaultProps = {
  address: "Lagos, Nigeria",
  birthday: "December 3, 1967 ",
  resumed: "2015",
};
