import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { ThemeProvider } from "styled-components";

export const theme = {
  mainColor: "#1F26E0",
  headerColor: "#FFFFFF",
  secondaryColor: "#1f730d",
  backgroundColor: "#f9f9f9",
  hoverColor: "linear-gradient(90deg, rgba(97,97,97,0.3) 9%, rgba(45,88,170,0.3) 92%)",
  mainGradient:
    "linear-gradient(90deg, rgba(58,125,215,1) 9%, rgba(62,138,255,1) 50%, rgba(45,88,170,1) 92%)",
  flippedGradient:
    "linear-gradient(180deg, rgba(58,125,215,1) 9%, rgba(62,138,255,1) 50%, rgba(45,88,170,1) 92%)",
  secondaryGradient:
    "linear-gradient(90deg, rgba(49,203,17,1) 9%, rgba(40,203,91,1) 50%, rgba(25,139,68,1) 92%)",
  mobileWidth: "650px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
