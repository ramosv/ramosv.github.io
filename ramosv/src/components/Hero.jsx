// Hero.jsx
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Hero() {
  const [state, handleSubmit] = useForm("xgveaozn");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (state.succeeded) {
      setOpen(true);
    }
  }, [state.succeeded]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          pt: { xs: 8, sm: 12, md: 16 },
        }}
      >
        <Stack
          spacing={2}
          sx={{ mb: (theme) => theme.spacing(2), width: "100%" }}
        >
          <Typography
            variant="h2"
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
              fontSize: "1.25rem",
            }}
          >
            Research & Development
          </Typography>
          <form onSubmit={handleSubmit}>
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
                type="email"
                name="email"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your email address"
                placeholder="Your email address"
                fullWidth
                required
                slotProps={{
                  input: {
                    autoComplete: "off",
                    "aria-label": "Enter your email address",
                  },
                }}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                sx={{ minWidth: "fit-content" }}
                disabled={state.submitting}
              >
                Contact Me
              </Button>
            </Stack>
          </form>
        </Stack>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thank you for your message!
        </Alert>
      </Snackbar>
    </Box>
  );
}
