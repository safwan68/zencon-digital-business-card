import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import App from "./App.jsx";

const theme = createTheme({
  typography: {
    fontFamily: '"Manrope", sans-serif',
  },

  palette: {
    primary: {
      main: "#101d36",
    },
    secondary: {
      main: "#243b6b",
    },
  },

  shape: {
    borderRadius: 16,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
