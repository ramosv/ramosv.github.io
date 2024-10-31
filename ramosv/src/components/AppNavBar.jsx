import * as React from "react";
import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SideMenuMobile from "./SideMenuMobile";
import MenuButton from "./MenuButton";
import Container from "@mui/material/Container";
import logo from "../assets/vr-logo.png";
import ColorModeIconDropdown from "../../theme/ColorModeIconDropdown";
import { useColorScheme } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
}));

export default function AppNavbar({ setCurrentPage }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container>
        <StyledToolbar variant="dense">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomIcon />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="text"
                color="primary"
                size="medium"
                onClick={() => setCurrentPage("home")}
                sx={{ marginLeft: 2 }}
              >
                Experience
              </Button>
              <Button
                variant="text"
                color="primary"
                size="medium"
                onClick={() => setCurrentPage("experience")}
                sx={{ marginLeft: 2 }}
              >
                Projects
              </Button>
              <Button
                variant="text"
                color="primary"
                size="medium"
                sx={{ marginLeft: 2 }}
                href="https://github.com/ramosv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
              >
                GitHub
              </Button>
              <Button
                variant="text"
                color="primary"
                size="medium"
                sx={{ marginLeft: 2 }}
                href="https://www.linkedin.com/in/ramosv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
              >
                LinkedIn
              </Button>
            </Box>
          </Box>
          <Box spacing={2} sx={{ justifyContent: "center" }}>
            <ColorModeIconDropdown />
            <spacing> </spacing>
            <MenuButton aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuRoundedIcon />
            </MenuButton>
            <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

AppNavbar.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export function CustomIcon() {
  const { mode } = useColorScheme();

  return (
    <Box sx={{ alignSelf: "flex-start" }}>
      <img
        src={logo}
        alt="custom icon"
        style={{
          paddingTop: "12px",
          width: "160px",
          height: "80px",
          filter: mode === "dark" ? "invert(100%)" : "none",
        }}
      />
    </Box>
  );
}
