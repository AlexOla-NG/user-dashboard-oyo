import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import LoginForm from "../login form/LoginForm";
import { fadeInUp } from "../login form/animation";

import OyoLogo from "../../assets/images/oyo logo.png";
import PrunedgeLogo from "../../assets/images/prunedge logo.png";

const LoginFormContentStyle = {
  background: "#F5F7FA",
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: { xs: "4rem 3rem 2rem", md: "8rem 6rem 2rem", xl: "8rem 6rem" },
};

const sectionStyle = {
  backgroundColor: "#FFF",
  padding: "5rem 3rem",
  // marginTop: "3rem",
  marginBottom: "3rem",
  // transform: "translateY(50%)",
};

const HeadingStyle = styled(Box)({
  padding: "16px 24px",
  textAlign: "left",
});

const LoginFormStyle = styled(Box)({
  padding: "0 24px 24px",
  // textAlign: "left",
});

const ContentWrapperStyle = {
  background: "#fff",
  boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.1)",
  borderRadius: "0px 0px 4px 4px",
  justifyContent: "center",
  flexDirection: "column",
  // my: "3rem",
  // margin: "auto",
  // padding: 24,
  // maxWidth: 400,
};

const LogoWrapperStyle = styled(Stack)({
  alignItems: "center",
  // marginTop: 5,
  paddingBottom: "2rem",
  textAlign: "center",
});

const ImageStyle = {
  width: "max-content",
  height: "auto",
};

const LoginContent = ({ modalOpen, handleModalOpen }) => {
  return (
    <Box sx={LoginFormContentStyle}>
      <section style={sectionStyle}>
        <LogoWrapperStyle>
          <img
            src={OyoLogo}
            alt="Oyo State Government Coat of Arms"
            style={ImageStyle}
          />
          <Typography variant="h5" component="h2">
            Oyo Data Management Solution
          </Typography>
        </LogoWrapperStyle>
        <Stack sx={ContentWrapperStyle}>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Typography variant="body2">
              Kindly provide your information to confirm your data
            </Typography>
          </HeadingStyle>
          <Divider />
          <LoginFormStyle>
            <LoginForm
              modalOpen={modalOpen}
              handleModalOpen={handleModalOpen}
            />
          </LoginFormStyle>
        </Stack>
      </section>
      <Stack alignItems="center" spacing={1}>
        <img
          src={PrunedgeLogo}
          alt="prunedge technologies"
          style={{ width: "93.64px" }}
        />
        <Typography variant="body2" color="secondary.main">
          Powered by Prunedge
        </Typography>
      </Stack>
    </Box>
  );
};

export default LoginContent;
