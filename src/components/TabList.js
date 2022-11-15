import React, { useState } from "react";
import { Stack, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TabList = () => {
  // STUB: manage state value for tab change
  const [tabValue, setTabValue] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const navlist = [
    {
      text: "Upload",
      icon: <CheckCircleIcon />,
      tValue: 0,
    },
    {
      text: "Preview & Submit",
      icon: <CheckCircleIcon />,
      tValue: 1,
    },
  ];

  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

  const stackStyles = {
    borderBottom: "0.1rem solid #E5E5EA",
    gap: "1rem",
    margin: "0.5rem 0",
    padding: "1rem 1.5rem",
    "& h5, p": {
      fontSize: "1.125rem",
    },
  };

  return (
    <div>
      <Toolbar />
      <Stack sx={stackStyles}>
        <Typography variant="h5">Passport Upload Process</Typography>
        <Typography>
          Follow the instructions below to properly upload your passport.
        </Typography>
      </Stack>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabValue}
        onChange={handleTabChange}
        aria-label="Vertical tabs"
        sx={{ mt: "1.5rem" }}
        TabIndicatorProps={{
          sx: {
            left: 0,
          },
        }}
      >
        {navlist.map((item, index) => {
          const { text, icon, tValue } = item;
          return (
            <Tab
              key={index}
              icon={icon}
              iconPosition="start"
              label={text}
              value={tValue}
              {...a11yProps(index)}
            />
          );
        })}
      </Tabs>
    </div>
  );
};

export default TabList;
