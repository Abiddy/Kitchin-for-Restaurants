import React from "react";
import JobManager from "./JobManager";

const UserHome = () => {
  return (
    <div>
      <JobManager applyButton={true} editDeleteOptions={false} />
    </div>
  );
};

export default UserHome;
