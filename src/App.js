import React, { useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./appTheme";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Biodata from "./pages/Biodata";
import Upload from "./pages/Upload";
import SuccessfulUpload from "./pages/SuccessfulUpload";
import Error from "./pages/Error";

const App = () => {
  const [auth, setAuth] = useState(
    false
  );

  const location = useLocation();

  // STUB: create function to save auth token to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("auth_token", JSON.stringify(auth));
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route
            path="/"
            element={
              auth ? (
                // replace Home component with Directory
                // don't forget to update path
                <Home onSaveToLocalStorage={saveToLocalStorage} />
              ) : (
                <Navigate to="/login" state={{ from: location }} replace />
              )
            }
          >
            <Route index element={<Biodata />} />
            <Route path="/biodata" element={<Biodata />} />
            <Route path="/upload" element={<Upload />} />
            <Route
              path="/upload-success"
              element={<SuccessfulUpload setAuth={setAuth} />}
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
