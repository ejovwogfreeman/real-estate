import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import success from "../images/successgif.gif";
import { Link } from "react-router-dom";

const ReserveUnitSuccess = ({ handleAdd2 }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [unit, setUnit] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://taximania-api.onrender.com/api/property/singleunit/${params.id}`,
        (res) => {
          res.json();
        }
      )
      .then((data) => {
        setUnit(data.data.unit);
      });
  }, [params.id]);

  return (
    <div className="modal-cont">
      <form className="modal-cont-details modal-comp-form mt-5 p-3 pb-2">
        <div className="top">
          <h1 className="h6">Unit Reserved</h1>
          <span>
            <Link to="/find_apartment">
              <AiOutlineClose className="icon" />
            </Link>
          </span>
        </div>
        <hr className="mb-3" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={success}
            alt=""
            className="d-block bg-primary"
            style={{ width: "300px" }}
          />
        </div>
        <p className="mb-2 text-center">Unit Reserved Successfully</p>
        <div>
          <Link to="/find_apartment" className="italic underline">
            Continue Searching...
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ReserveUnitSuccess;
