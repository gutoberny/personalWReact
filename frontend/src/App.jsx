import { useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import TopBar from "./components/TopBar";
import PersonalCard from "./components/PersonalCard";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Define o tema inicial como escuro

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* <TopBar darkMode={darkMode} toggleTheme={toggleTheme} /> */}
      <div style={{ padding: 16, marginTop: 70 }}>
        <PersonalCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
