import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import TopBar from "./components/TopBar";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "hsl(var(--background))",
        paper: "hsl(var(--card))",
      },
      text: {
        primary: "hsl(var(--foreground))",
        secondary: "hsl(var(--muted-foreground))",
      },
      primary: {
        main: "hsl(var(--primary))",
        contrastText: "hsl(var(--primary-foreground))",
      },
      secondary: {
        main: "hsl(var(--secondary))",
        contrastText: "hsl(var(--secondary-foreground))",
      },
    },
    shape: {
      borderRadius: "var(--radius)",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "hsl(var(--background))",
        paper: "hsl(var(--card))",
      },
      text: {
        primary: "hsl(var(--foreground))",
        secondary: "hsl(var(--muted-foreground))",
      },
      primary: {
        main: "hsl(var(--primary))",
        contrastText: "hsl(var(--primary-foreground))",
      },
      secondary: {
        main: "hsl(var(--secondary))",
        contrastText: "hsl(var(--secondary-foreground))",
      },
    },
    shape: {
      borderRadius: "var(--radius)",
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <TopBar darkMode={darkMode} toggleTheme={toggleTheme} />
      <div style={{ padding: 16 }}></div>
    </ThemeProvider>
  );
}

export default App;
