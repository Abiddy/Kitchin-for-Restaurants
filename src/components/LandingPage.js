import React from "react";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import { useState } from "react";
import Register from "./Register";
import "./LandingPage.css";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

const Landing = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const [type, setType] = useState("");

  const userType = (id) => {
    setOpen(true);
    setType(id);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="bg-container">
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 50,
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1>Welcome to the Kitchin!</h1>

            <Box component="div" sx={{ display: "inline" }}>
              <Button onClick={() => userType("user")}>
                I'm Looking for a Job in the Restaurant Industry
              </Button>
              <Button onClick={() => userType("restaurant")}>
                I'm Looking to Hire Staff for my Restaurant
              </Button>
            </Box>
          </Box>
        </Container>

        {open && <Register onClose={handleClose} open={open} type={type} />}
      </div>
    </Grid>
  );
};

export default Landing;
