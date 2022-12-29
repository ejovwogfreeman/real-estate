import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { ToastifyContext } from "../../context/ToastifyContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsTrash, BsPencilSquare } from "react-icons/bs";

const ReserveUnitUnderProp = ({ handleChange3 }) => {
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
            {unit.map((x, index) => {
              return (
                <div
                  key={x.id}
                  className="d-flex align-items-center justify-content-between py-2 border-bottom"
                >
                  <p>
                    <Link to={`/reserved/${params.id}`}>
                      {index + 1}.&nbsp;{x.name}
                    </Link>
                  </p>
                  <small
                    className={
                      x.unitstatus === "available"
                        ? "bg-success text-light p-1 rounded"
                        : "bg-warning text-light p-1 rounded"
                    }
                  >
                    {x.unitstatus}
                  </small>
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

export default ReserveUnitUnderProp;
