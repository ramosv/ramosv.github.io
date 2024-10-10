import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppNavbar from "./components/AppNavbar";
import AppTheme from "../theme/AppTheme.jsx";
import Container from "@mui/material/Container";
import Copyright from "./components/Copyright.jsx";
import Hero from "./components/Hero.jsx";
import Divider from "@mui/material/Divider";
// import ExperiencePage from "./components/ExperiencePage.jsx";
//{currentPage === "experience" && <ExperiencePage />}
import HomePage from "./components/HomePage.jsx";

export default function Dashboard(props) {
  const [currentPage, setCurrentPage] = React.useState("home");

  return (
    <AppTheme {...props}>
      <Container
        component="main"
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
          ...theme.applyStyles("dark", {
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
          }),
        })}
      >
        <CssBaseline enableColorScheme />
        <AppNavbar setCurrentPage={setCurrentPage} />
        <Divider />
        <Hero />
        <Divider />
        {currentPage === "home" && <HomePage />}

        <Divider />
      </Container>
      <Copyright sx={{ my: 4 }} />
    </AppTheme>
  );
}
