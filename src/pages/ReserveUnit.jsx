import React, { useState, useEffect } from "react";
// import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { ToastifyContext } from "../context/ToastifyContext";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ReserveUnit = ({ handleAdd2, countState, clearCount }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);

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

  const getId = () => {
    try {
      let id = JSON.parse(localStorage.getItem("investor-detail")).user.id;
      return id;
    } catch (err) {
      console.elog("no user id");
      return null;
    }
  };

  const getToken = () => {
    try {
      let token = JSON.parse(
        localStorage.getItem("investor-detail")
      ).AccessToken;
      return token;
    } catch (err) {
      console.elog("no token");
      return null;
    }
  };

  const AccessToken = getToken();

  const userId = getId();

  const reserveData = {
    userId: userId,
    unitcount: countState.length > 0 ? countState[0].quantity : 1,
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(
        `https://taximania-api.onrender.com/api/property/unit/reserve/${params.id}`,
        reserveData,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + AccessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "Unit Reserved Successfully",
          variant: "success",
          open: true,
        });
        localStorage.setItem("updated-unit-detail", JSON.stringify(res));
        navigate("/reserve_unit_success");
        clearCount();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "Please Fill All Fields",
          variant: "error",
          open: true,
        });
      });
  };

  return (
    <div className="modal-cont">
      <form
        className="modal-cont-details modal-comp-form mt-5 p-3 pb-2"
        onSubmit={handleSubmit}
      >
        <div className="top">
          <h1 className="h6">Reserve Unit</h1>
          <span>
            <AiOutlineClose onClick={() => navigate(-1)} className="icon" />
          </span>
        </div>
        <hr className="mb-3" />
        <p className="mb-2">Sure you want to reserve this unit? </p>
        <p>
          {" "}
          Click "OK" to reserve{" "}
          {countState.length > 0 ? countState[0].quantity : 1} unit of
          <strong className="italic">"{unit.name}"</strong>
        </p>
        <div>
          <button disabled={loading} className="btn btn-outline-success mt-3">
            {loading ? "LOADING..." : "OK"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReserveUnit;
