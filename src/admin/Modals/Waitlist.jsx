import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { ToastifyContext } from "../../context/ToastifyContext";
// import { useNavigate } from "react-router-dom";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const WaitlistModal = ({ handleChange4 }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("https://taximania-api.onrender.com/api/property", (res) => {
        res.json();
      })
      .then((data) =>
        setProperty(data.data.properties.filter((x) => x.status === "waitlist"))
      );
  });

  return (
    <div className="modal-cont">
      <div className="modal-cont-details">
        <div className="top">
          <h1 className="h6">All Waitlist</h1>
          <span>
            <AiOutlineClose onClick={handleChange4} className="icon" />
          </span>
        </div>
        <hr />
        {property.length > 0 ? (
          <>
            {property.map((x, index) => {
              return (
                <div
                  key={x.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <Link to={`/waitlist/${x.id}`}>
                    {index + 1}.&nbsp;{x.name} &nbsp;
                  </Link>
                  <span>
                    <small
                      className={
                        x.status === "live"
                          ? "bg-success text-light p-1 rounded"
                          : "bg-warning text-light p-1 rounded"
                      }
                    >
                      {x.status}
                    </small>
                  </span>
                </div>
              );
            })}
          </>
        ) : (
          <p>Loading Properties...</p>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
