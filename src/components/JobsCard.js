import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import JobItem from "./JobItem";
// import EditTask from "./EditTask";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import EditJob from "./EditJob";
import JobApplicationForm from "./JobApplication/JobApplicationForm";

function JobsCard({
  id,
  title,
  description,
  company,
  completed,
  applyButton,
  editDeleteOptions,
}) {
  const [open, setOpen] = useState({ edit: false, view: false, apply: false });

  const handleClose = () => {
    setOpen({ edit: false, view: false, apply: false });
  };

  /* function to delete a document from firstore */
  const handleDelete = async () => {
    const taskDocRef = doc(db, "jobs", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CardActions>
            <Typography variant="h5" component="div" gutterBottom>
              {title} {company}
            </Typography>
          </CardActions>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            <h3>Description: </h3>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {editDeleteOptions && (
            <div>
              <Button onClick={() => setOpen({ ...open, edit: true })}>
                Edit
              </Button>
              <Button onClick={handleDelete}>Delete</Button>
            </div>
          )}
          <Button onClick={() => setOpen({ ...open, view: true })}>View</Button>
          {applyButton && (
            <Box mr={100}>
              <Button
                variant="outlined"
                onClick={() => setOpen({ ...open, apply: true })}
              >
                Apply
              </Button>
            </Box>
          )}
        </CardActions>
      </Card>

      {open.view && (
        <JobItem
          onClose={handleClose}
          title={title}
          description={description}
          open={open.view}
        />
      )}

      {open.apply && (
        <JobApplicationForm onClose={handleClose} open={open.apply} id={id} />
      )}

      {open.edit && (
        <EditJob
          onClose={handleClose}
          toEditTitle={title}
          toEditDescription={description}
          open={open.edit}
          id={id}
        />
      )}
    </div>
  );
}

export default JobsCard;

{
  /* <Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  {title}
  </Typography>
  <Typography variant="h5" component="div">
  {description}
  </Typography>
  <Typography sx={{ mb: 1.5 }} color="text.secondary">
    adjective
  </Typography>
  <Typography variant="body2">
    well meaning and kindly.
    <br />
    {'"a benevolent smile"'}
  </Typography>
</CardContent>
<CardActions>
  <Button       
    onClick={() => setOpen({ ...open, edit: true })}>Edit
  </Button>
</CardActions>
<CardActions>
  <Button       
    onClick={handleDelete}>Delete
  </Button>
</CardActions>
<CardActions>
  <Button       
    onClick={() => setOpen({ ...open, apply: true })}>
      Apply
  </Button>
</CardActions>
<CardActions>
  <Button       
    onClick={() => setOpen({ ...open, view: true })}>
      View
  </Button>
</CardActions>
</Card>


{open.view && (
  <JobItem
    onClose={handleClose}
    title={title}
    description={description}
    open={open.view}
  />
)}

{open.apply && (
  <JobApplicationForm onClose={handleClose} open={open.apply} id={id} />
)}

{open.edit && (
  <EditJob
    onClose={handleClose}
    toEditTitle={title}
    toEditDescription={description}
    open={open.edit}
    id={id}
  />
)} */
}
