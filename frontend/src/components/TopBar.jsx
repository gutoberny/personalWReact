import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Select from "@mui/material/Select";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTranslation } from "react-i18next";
import { FlagIcon } from "react-flag-kit";

const pages = ["about", "projects", "contact"];

function TopBar({ darkMode, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    setLanguage(selectedLanguage);

    i18n.changeLanguage(selectedLanguage);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div
      style={{
        width: "100vw",

        display: "flex",
      }}
    >
      <AppBar position="fixed" sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,

                  display: { xs: "none", md: "flex" },

                  fontFamily: "monospace",

                  fontWeight: 700,

                  letterSpacing: ".3rem",

                  color: "inherit",

                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {t(page)}
                </Button>
              ))}
            </Box>

            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
              {darkMode ? <LightModeIcon /> : <Brightness2Icon />}
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <Select
                value={language}
                onChange={handleLanguageChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{ color: "white", ".MuiSelect-icon": { color: "white" } }}
              >
                <MenuItem value="en">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FlagIcon code="US" size={24} />

                    <Typography sx={{ ml: 1 }}>EN</Typography>
                  </Box>
                </MenuItem>

                <MenuItem value="br">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FlagIcon code="BR" size={24} />

                    <Typography sx={{ ml: 1 }}>PT</Typography>
                  </Box>
                </MenuItem>
              </Select>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default TopBar;
