import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

import Hero from "../components/Hero";
import LoginContent from "../components/login form/LoginContent";
import BasicModal from "../components/login form/Modal";

// TODO: stopped here
// fix gridRow height increase when helperText pops up on LoginForm

//////////////////////////////////
const RootStyle = styled(Box)({
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))",
  // gridAutoRows: "1fr",
});

const Login = ({ setAuth }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <RootStyle>
        <Hero />
        <LoginContent modalOpen={open} handleModalOpen={handleOpen} />
        <BasicModal
          setAuth={setAuth}
          modalOpen={open}
          handleModalClose={handleClose}
        />
      </RootStyle>
    </div>
  );
};

export default Login;
