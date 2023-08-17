import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import ApplicationCard from "./JobApplicationCard";
import Navbar from "../Navbar";
import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import { Container, Box } from "@mui/system";

export const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "jobApplications"),
      orderBy("created", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      setApplications(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <h1>Applicants</h1>

        <Box component="span" sx={{ p: 5 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Server
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Name: John Doe
              </Typography>
              {/* <Typography sx={{ fontSize: 14 }}>New York, CA</Typography> */}
              <Typography sx={{ fontSize: 14 }}> 2 min ago</Typography>
              <Box
                m={1}
                //margin
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button variant="contained"> Veiw Application</Button>
              </Box>
            </CardContent>
          </Card>
          <br />
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Chef
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Name: Tom Hick
              </Typography>
              {/* <Typography sx={{ fontSize: 14 }}>MI, NY</Typography> */}
              <Typography sx={{ fontSize: 14 }}>53 min ago</Typography>
              <Box
                m={1}
                //margin
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button variant="contained"> Veiw Application</Button>
              </Box>
            </CardContent>
          </Card>
          <br />
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Chef
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Name: Nouman Abidi
              </Typography>
              {/* <Typography sx={{ fontSize: 14 }}>KA, AR</Typography> */}
              <Typography sx={{ fontSize: 14 }}>Applied 1 month ago</Typography>
              <Box
                m={1}
                //margin
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button variant="contained"> Veiw Application</Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        {applications.map((application) => (
          <ApplicationCard
            key={application.id}
            resume={application.data.resume}
            completed={application.data.completed}
          />
        ))}
      </Container>
    </div>
  );
};
