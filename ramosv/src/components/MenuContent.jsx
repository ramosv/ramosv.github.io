import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const mainListItems = [
  {
    text: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/ramosv/",
  },
  {
    text: "Github",
    icon: <GitHubIcon />,
    link: "https://github.com/ramosv",
  },
  {
    text: "Email",
    icon: <EmailIcon />,
    link: "mailto:vicente.ramos@ucdenver.edu",
  },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List>
        {mainListItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemButton
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "text.primary",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "rgba(100, 108, 255, 0.1)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "text.primary" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    color: "text.primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Stack>
  );
}
