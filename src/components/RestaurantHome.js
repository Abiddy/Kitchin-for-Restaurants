import React from "react";
import JobManager from "./JobManager";
import AddJob from "./AddJob";
import { Button } from "@mui/material";
import { useState } from "react";

const RestaurantHome = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <div>
      <Button
        sx={{ t: 20 }}
        variant="outlined"
        onClick={() => setOpenAddModal(true)}
      >
        Post a Job +
      </Button>
      <div className="formstyle">
        <JobManager applyButton={false} editDeleteOptions={true} />
      </div>

      {openAddModal && (
        <AddJob onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
};

export default RestaurantHome;
