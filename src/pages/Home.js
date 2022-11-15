import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";

// TODO: stopped here
// setup Home page; add navbar on all other pages except login

const Home = ({ onSaveToLocalStorage }) => {
  // STUB: create shared state for toggling drawer in mobile view
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // STUB: save auth_token to local storage after successful login
  useEffect(() => {
    onSaveToLocalStorage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawerWidth = "17.688rem";

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // py: 3,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth})` },
        }}
      >
        <Toolbar />

        <Outlet context={[drawerWidth, handleDrawerToggle, mobileOpen]} />
      </Box>
    </Box>
  );
};

export default Home;
