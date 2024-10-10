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
import logo from "../assets/logo.png";
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
  padding: "8px 12px",
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
        mt: 3,
      }}
    >
      <Container>
        <StyledToolbar variant="dense">
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <CustomIcon />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="text"
                color="Secondary"
                size="small"
                onClick={() => setCurrentPage("home")}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="Secondary"
                size="small"
                onClick={() => setCurrentPage("experience")}
              >
                Experience
              </Button>
            </Box>
          </Box>
          <Box spacing={2} sx={{ justifyContent: "center" }}>
            <ColorModeIconDropdown />
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
    <Box
      sx={{
        height: 21,
        width: 90,
        mr: 1,
        borderRadius: "999px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        color: "hsla(210, 100%, 95%, 0.9)",
        border: "0px solid",
        borderColor: mode === "dark" ? "white" : "black",
        bgcolor: mode === "dark" ? "transparent" : "white",
        boxShadow:
          mode === "dark"
            ? "inset 0 2px 5px rgba(0, 0, 0, 0.3)"
            : "inset 0 2px 5px rgba(255, 255, 255, 0.3)",
      }}
    >
      <img
        src={logo}
        alt="custom icon"
        style={{
          width: "4rem",
          height: "3rem",
          filter: mode === "dark" ? "invert(100%)" : "none",
        }}
      />
    </Box>
  );
}
