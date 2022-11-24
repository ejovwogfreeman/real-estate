import React from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";

const UnitModal = ({ handleChange3 }) => {
  return (
    <div className="modal-cont">
      <div className="modal-cont-details">
        <div className="top">
          <h1>All Units</h1>
          <span>
            <AiOutlineClose onClick={handleChange3} className="icon" />
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default UnitModal;
