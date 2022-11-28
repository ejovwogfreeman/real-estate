import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { ToastifyContext } from "../../context/ToastifyContext";
import { Link } from "react-router-dom";

const UnitModal = ({ handleChange3 }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("https://taximania-api.onrender.com/api/property", (res) => {
        res.json();
      })
      .then((data) => setProperty(data.data.properties));
  });

  const getToken = () => {
    try {
      let token = JSON.parse(localStorage.getItem("admin-detail")).AccessToken;
      return token;
    } catch (err) {
      console.elog("no token");
      return null;
    }
  };

  return (
    <div className="modal-cont">
      <div className="modal-cont-details">
        <div className="top">
          <h1 className="h6">All Units</h1>
          <span>
            <AiOutlineClose onClick={handleChange3} className="icon" />
          </span>
        </div>
        <hr />
        {property.length > 0 ? (
          <>
            {property.map((x) => {
              return (
                <div
                  key={x.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <Link to={`/property_unit/${x.id}`}>
                    view all units for {x.name}
                  </Link>
                </div>
              );
            })}
          </>
        ) : (
          <p>Loading Units...</p>
        )}
      </div>
    </div>
  );
};

export default UnitModal;
