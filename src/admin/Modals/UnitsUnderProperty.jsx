import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { ToastifyContext } from "../../context/ToastifyContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsTrash, BsPencilSquare } from "react-icons/bs";

const UnitsUnderProperty = ({ handleChange3 }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState([]);
  const [prop, setProp] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://taximania-api.onrender.com/api/property/unit/${params.id}`,
        (res) => {
          res.json();
        }
      )
      .then((data) => setUnit(data.data.units));
  });

  useEffect(() => {
    axios
      .get(
        `https://taximania-api.onrender.com/api/property/${params.id}`,
        (res) => {
          res.json();
        }
      )
      .then((data) => {
        setProp(data.data.property);
      });
  }, [params.id]);

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
    const deleteProp = unit.filter((x) => x.id == id);
    const deletePropId = deleteProp[0].id;
    axios
      .delete(
        `https://taximania-api.onrender.com/api/property/unit/delete/${deletePropId}`,
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
          message: "Unit Deleted successfully",
          variant: "success",
          open: true,
        });
        setLoading(false);
        console.log("unit deleted successfully");
        navigate("/admin_dashboard");
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
      <div className="modal-cont-details p-3">
        <div className="top">
          <h1 className="h6">All Units For {prop.name}</h1>
          <Link to="/admin_dashboard">
            <AiOutlineClose className="icon" />
          </Link>
        </div>
        <hr className="mt-2 mb-1" />
        {unit.length > 0 ? (
          <>
            {unit.map((x) => {
              return (
                <div
                  key={x.id}
                  className="d-flex align-items-center justify-content-between py-2 border-bottom"
                >
                  <p>
                    {x.name} &nbsp;{" "}
                    <small
                      className={
                        x.unitstatus === "available"
                          ? "bg-success text-light p-1 rounded"
                          : "bg-warning text-light p-1 rounded"
                      }
                    >
                      {x.unitstatus}
                    </small>
                  </p>
                  <span>
                    {/* <Link
                      to={`/edit_unit/${x.id}`}
                      className="btn btn-outline-secondary me-2"
                    >
                      <BsPencilSquare />
                    </Link> */}
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
          <p className="py-2">Loading Units...</p>
        )}
      </div>
    </div>
  );
};

export default UnitsUnderProperty;
