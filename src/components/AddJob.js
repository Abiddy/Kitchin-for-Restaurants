import * as React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { Input, Button, Typography } from "@mui/material";

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

export default function AddJob({ onClose, open }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "jobs"), {
        title: title,
        description: description,
        location: location,
        completed: false,
        created: Timestamp.now(),
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLable="Add Job" onClose={onClose} open={open}>
      <Box sx={style}>
        <form onSubmit={handleSubmit} className="addTask" name="addJob">
          <Typography>Job Title</Typography>
          <Input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter title"
          />
          <Typography>Description</Typography>
          <Input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter job decription"
            value={description}
          />
          <br />
          <br />
          <Button sx={{ t: 20 }} variant="outlined" type="submit">
            Post
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
