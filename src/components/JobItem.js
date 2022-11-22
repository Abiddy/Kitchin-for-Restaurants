import { Modal } from "@mui/material";
import "./jobItems.css";

function JobItem({ onClose, open, title, description }) {
  return (
    <Modal modalLable="Job Item" onClose={onClose} open={open}>
      <div className="jobItem">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Modal>
  );
}

export default JobItem;
