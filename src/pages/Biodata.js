import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";

import BiodataTable from "../components/table/BiodataTable";
import TextSummary from "../components/biodata/TextSummary";
import IconSummary from "../components/biodata/IconSummary";
import { ReactComponent as MrNobody } from "../assets/images/mrNobody.svg";

const boxWrapperStyles = {
  py: 3,
};

const boxHeaderStyles = {
  display: "flex",
  gap: "1em",
  width: "100%",
};

const iconStyles = {
  width: "150px",
  height: "151px",
};

const boxInnerHeaderStyles = {
  width: "100%",
};

const stackHeaderStyles = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: { sm: "wrap" },
  gap: "1.5rem",
  paddingBottom: "1.5rem",
};

const stackInnerStyles = {
  gap: "0.8rem",
  "& h2": {
    fontSize: "1.688rem",
    fontWeight: 700,
    pr: "1rem",
  },
  "& span": {
    fontSize: "1rem",
    lineHeight: 1,
    padding: "0 0.3rem",
  },
};

const chipStyles = {
  backgroundColor: "#FFD4D2",
  color: "#9F1F17",
};

const buttonStyles = {
  px: "1rem",
  py: "0.313rem",
};

const Biodata = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <Container maxWidth="xl">
      <Box sx={boxWrapperStyles}>
        <Box sx={boxHeaderStyles}>
          <MrNobody viewBox="0 0 100 101" style={iconStyles} />
          <Box sx={boxInnerHeaderStyles}>
            <Stack sx={stackHeaderStyles}>
              <Stack sx={stackInnerStyles}>
                <Stack flexDirection="row">
                  <Typography variant="h2">Julius Olubunmi</Typography>
                  <Chip label="No Upload" sx={chipStyles} />
                </Stack>
                <TextSummary />
              </Stack>
              <Button
                variant="contained-main"
                sx={buttonStyles}
                onClick={handleClick}
              >
                upload passport
              </Button>
            </Stack>
            <IconSummary />
          </Box>
        </Box>
        <BiodataTable />
      </Box>
    </Container>
  );
};

export default Biodata;
