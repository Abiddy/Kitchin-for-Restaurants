import React from "react";
import { Card, Typography, CardContent } from "@mui/material";

const ApplicationCard = ({ resume, completed, jobId, userId, created }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {resume}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          Submitted By:
          {created} {jobId} {userId} {completed}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ApplicationCard;
