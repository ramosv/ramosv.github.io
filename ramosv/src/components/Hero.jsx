import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";

export default function Hero() {
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          pt: { xs: 8, sm: 12 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          container
          spacing={2}
          columns={12}
          sx={{ mb: (theme) => theme.spacing(2) }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Vicente&nbsp;Ramos&nbsp;
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            Software Developer | Graduate Researcher | PhD Student
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: "100%" }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
