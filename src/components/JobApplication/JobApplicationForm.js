import * as React from "react";
import { useState } from "react";
import {
  db,
  auth,
} from "../../firebase";
import { collection, addDoc, Timestamp, doc } from "firebase/firestore";
import Modal from "@mui/material/Modal";
import { Button, Box, Input } from "@mui/material";
import { query, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function JobApplicationForm({ onClose, open, id }) {
  const [resume, setResume] = useState("");

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobDocRef = doc(db, "jobs", id);
    const userDocRef = doc(db, "users", id);
    try {
      const q = query(collection(db, "users"), where("id", "==", userDocRef));
      console.log(q);
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
      await addDoc(collection(db, "jobApplications"), {
        resume: resume,
        completed: false,
        jobId: jobDocRef,
        userId: userDocRef,
        username: name,
        created: Timestamp.now(),
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal modalLable="Apply" onClose={onClose} open={open}>
      <Box sx={style}>
        <form onSubmit={handleSubmit} className="addTask" name="addJob">
          <Input
            label="Resume"
            type="file"
            name="resume"
            onChange={(e) => setResume(e.target.value)}
            value={resume}
          />
          <Button type="submit">Submit Application</Button>
        </form>
      </Box>
    </Modal>
  );
}
