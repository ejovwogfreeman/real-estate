import React from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";

const PropertyModal = ({ handleChange2 }) => {
  return (
    <div className="modal-cont">
      <div className="modal-cont-details">
        <div className="top">
          <h1>All Properties</h1>
          <span>
            <AiOutlineClose onClick={handleChange2} className="icon" />
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PropertyModal;
