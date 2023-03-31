import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import React, { useEffect } from "react";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  palette: {
    primary: {
      main: "#39CDCC", // desired background color of AppBar
    },
  },
});

function App() {
  const apiUrl =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
  const localStorageKey = "users";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        localStorage.setItem(localStorageKey, JSON.stringify(data));
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AnimatedRoutes />
    </ThemeProvider>
  );
}

export default App;
