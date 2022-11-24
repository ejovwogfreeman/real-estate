import React from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";

const UserModal = ({ handleChange1 }) => {
  return (
    <div className="modal-cont">
      <div className="modal-cont-details">
        <div className="top">
          <h1>All Users</h1>
          <span>
            <AiOutlineClose onClick={handleChange1} className="icon" />
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default UserModal;