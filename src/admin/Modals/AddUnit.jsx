import React from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";

const AddUnit = ({ handleAdd3 }) => {
  return (
    <div className="modal-cont">
      <div className="modal-cont-details">
        <div className="top">
          <h1>Add Unit</h1>
          <span>
            <AiOutlineClose onClick={handleAdd3} className="icon" />
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AddUnit;
