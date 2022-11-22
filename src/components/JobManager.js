import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import JobsCard from "./JobsCard";
import { Container, Box } from "@mui/material";

function JobManager({ applyButton, editDeleteOptions }) {
  const [jobs, setJobs] = useState([]);

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const taskColRef = query(
      collection(db, "jobs"),
      orderBy("created", "desc")
    );
    onSnapshot(taskColRef, (snapshot) => {
      setJobs(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <Container maxWidth="md">
      <div>
        <Box component="span" sx={{ t: 50 }}></Box>
        <div>
          {jobs.map((job) => (
            <Box component="span" sx={{ p: 5 }}>
              <JobsCard
                id={job.id}
                key={job.id}
                completed={job.data.completed}
                title={job.data.title}
                description={job.data.description}
                company={job.data.name}
                applyButton={applyButton}
                editDeleteOptions={editDeleteOptions}
              />
            </Box>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default JobManager;
