import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { ToastifyContext } from "../../context/ToastifyContext";
// import { useNavigate } from "react-router-dom";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const PropertyModal = ({ handleChange2 }) => {
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

  const handleDelete = (id) => {
    setLoading(true);
    const AccessToken = getToken();
    const deleteProp = property.filter((x) => x.id == id);
    const deletePropId = deleteProp[0].id;
    axios
      .delete(
        `https://taximania-api.onrender.com/api/property/${deletePropId}`,
        {
          headers: {
            Authorization: `Bearer ${AccessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setToastifyState({
          ...ToastifyState,
          message: "Property Deleted successfully",
          variant: "success",
          open: true,
        });
        setLoading(false);
        handleChange2();
      })
      .catch((err) => {
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "An Error Occured",
          variant: "error",
          open: true,
        });
      });
  };

  return (
    <div className="modal-cont">
      <div className="modal-cont-details">
        <div className="top">
          <h1 className="h6">All Properties</h1>
          <span>
            <AiOutlineClose onClick={handleChange2} className="icon" />
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
                  <p>
                    {x.name} &nbsp;
                    <small
                      className={
                        x.status === "live"
                          ? "bg-success text-light p-1 rounded"
                          : "bg-warning text-light p-1 rounded"
                      }
                    >
                      {x.status}
                    </small>
                  </p>
                  <span>
                    <Link
                      to={`/edit_property/${x.id}`}
                      className="btn btn-outline-secondary me-2"
                    >
                      <BsPencilSquare />
                    </Link>
                    <button
                      disabled={loading}
                      className="btn btn-outline-danger"
                      onClick={() => {
                        handleDelete(x.id);
                      }}
                    >
                      {loading ? "LOADING" : <BsTrash />}
                    </button>
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

export default PropertyModal;
