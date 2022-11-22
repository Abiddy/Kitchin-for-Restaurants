import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Navbar from "../Navbar";
import { Card, CardContent, Stack, Chip, Container, Box } from "@mui/material";
import { maxHeight } from "@mui/system";

export default function Learning() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <h1>Kitchin Learning</h1>
        <Box component="span" sx={{ p: 5 }}>
          <Card sx={{ minWidth: 275, maxHeight: 1000 }}>
            <CardContent>
              <Stack direction="row" spacing={1}>
                <Chip label="Food" color="primary" />
                <Chip label="Waiting Tables" color="primary" />
                <Chip label="Serving" />
                <Chip label="Restaurants" />
              </Stack>
            </CardContent>
            <CardContent>
              <YoutubeEmbed embedId="TbFVPYD-Kfs" />
            </CardContent>
          </Card>
        </Box>
        <Box component="span" sx={{ p: 5 }}>
          <Card sx={{ minWidth: 275, maxHeight: 1000 }}>
            <CardContent>
              <Stack direction="row" spacing={1}>
                <Chip label="Cooking" />
                <Chip label="Cutting Vegetables" />
                <Chip label="Serving" />
                <Chip label="Restaurants" color="primary" />
              </Stack>
            </CardContent>
            <CardContent>
              <YoutubeEmbed embedId="ZJy1ajvMU1k" />
            </CardContent>
          </Card>
        </Box>
        <Card sx={{ minWidth: 275, maxHeight: 1000 }}>
          <CardContent>
            <Stack direction="row" spacing={1}>
              <Chip label="Cooking" />
              <Chip label="Line Cook" color="primary" />
              <Chip label="Cutting Vegetables " />
              <Chip label="Serving" />
            </Stack>
          </CardContent>
          <CardContent>
            <YoutubeEmbed embedId="H7MRHuzCNvM" />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
