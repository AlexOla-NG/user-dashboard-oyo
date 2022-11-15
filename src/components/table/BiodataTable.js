import React from "react";
import styled from "@emotion/styled";
import { Box, Grid, Paper, TableContainer, Typography } from "@mui/material";

const tableWrapperStyles = {
  border: "1px solid #E5E5EA",
  borderRadius: 2,
  my: 5,
  p: 4,
  // px: 5,
  // py: 3,
};

// STUB: 🌟 i'm proud of the styles code below 🌟
const gridCellStyles = {
  borderBottom: "1px solid #E5E5EA",
  py: "1.5rem",
  "& h5": {
    color: "#6B6C7E",
    fontSize: "1rem",
    paddingBottom: "0.7rem",
  },
  "& p": {
    color: "#272833",
    fontSize: "1.25rem",
    textTransform: "capitalize",
  },
  noBottomBorder: {
    borderBottom: "none",
    pb: 0,
  },
};

const TableHead = styled(Typography)({
  color: "#9A0002",
  fontSize: "1.25rem",
  fontWeight: 700,
  whiteSpace: "nowrap",
});

const BiodataTable = ({ personalData, occupationDetails }) => {
  const {
    surname,
    firstName,
    middleName,
    gender,
    maritalStatus,
    religion,
    nationality,
    dateOfBirth,
    stateOfOrigin,
    lgaOfOrigin,
    phoneNumber,
  } = personalData;
  const {
    dateOfFirstAppointment,
    presentGradeLevel,
    presentCadre,
    presentDesignation,
    department,
    mdas,
  } = occupationDetails;

  return (
    <TableContainer component={Paper} elevation={0} sx={tableWrapperStyles}>
      <Box sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>Personal Data</TableHead>
        <Grid container>
          <Grid item xs={12}>
            <Grid container columns={3} sx={gridCellStyles}>
              <Grid item xs={1}>
                <Typography variant="h5">SURNAME</Typography>
                <Typography>{surname}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">FIRST NAME</Typography>
                <Typography>{firstName}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">MIDDLE NAME</Typography>
                <Typography>{middleName}</Typography>
              </Grid>
            </Grid>
            <Grid container columns={3} sx={gridCellStyles}>
              <Grid item xs={1}>
                <Typography variant="h5">GENDER</Typography>
                <Typography>{gender}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">MARITAL STATUS</Typography>
                <Typography>{maritalStatus}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">RELIGION</Typography>
                <Typography>{religion}</Typography>
              </Grid>
            </Grid>
            <Grid container columns={3} sx={gridCellStyles}>
              <Grid item xs={1}>
                <Typography variant="h5">NATIONALITY</Typography>
                <Typography>{nationality}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">DATE OF BIRTH</Typography>
                <Typography>{dateOfBirth}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">STATE OF ORIGIN</Typography>
                <Typography>{stateOfOrigin}</Typography>
              </Grid>
            </Grid>
            <Grid container columns={3} sx={gridCellStyles}>
              <Grid item xs={1}>
                <Typography variant="h5">LGA OF ORIGIN</Typography>
                <Typography>{lgaOfOrigin}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">PHONE NUMBER</Typography>
                <Typography>{phoneNumber}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <TableHead sx={{ pt: "2.5rem" }}>Occupation Details</TableHead>
        <Grid container>
          <Grid item xs={12}>
            <Grid container columns={3} sx={gridCellStyles}>
              <Grid item xs={1}>
                <Typography variant="h5">DATE OF FIRST APPOINTMENT</Typography>
                <Typography>{dateOfFirstAppointment}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">PRESENT GRADE LEVEL</Typography>
                <Typography>{presentGradeLevel}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">PRESENT CADRE</Typography>
                <Typography>{presentCadre}</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              columns={3}
              sx={[
                gridCellStyles,
                gridCellStyles.noBottomBorder,
              ]} /* STUB: 🌟 i'm proud of this line 🌟 */
            >
              <Grid item xs={1}>
                <Typography variant="h5">PRESENT DESIGNATION</Typography>
                <Typography>{presentDesignation}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">DEPARTMENT</Typography>
                <Typography>{department}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h5">MDAs</Typography>
                <Typography>{mdas}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </TableContainer>
  );
};

export default BiodataTable;

BiodataTable.defaultProps = {
  personalData: {
    surname: "julius",
    firstName: "olubunmi",
    middleName: "dorcas",
    gender: "female",
    maritalStatus: "married",
    religion: "christianity",
    nationality: "nigerian",
    dateOfBirth: "03/12/1967",
    stateOfOrigin: "ondo",
    lgaOfOrigin: "ilaje",
    phoneNumber: "081234567890",
  },
  occupationDetails: {
    dateOfFirstAppointment: "9/1/1997",
    presentGradeLevel: "GL. 15",
    presentCadre: "education officer",
    presentDesignation: "deputy director of education",
    department: "mass literature",
    mdas: "agency for adults & non-formal education",
  },
};
