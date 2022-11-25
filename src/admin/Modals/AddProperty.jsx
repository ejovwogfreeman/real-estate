import React, { useState } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { ToastifyContext } from "../../context/ToastifyContext";
import axios from "axios";

const AddProperty = ({ handleAdd2 }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("waitlist");

  const getToken = () => {
    try {
      let token = JSON.parse(localStorage.getItem("admin-detail")).AccessToken;
      return token;
    } catch (err) {
      console.log("no token");
      return null;
    }
  };

  const AccessToken = getToken();

  const property = {
    name: name,
    location: location,
    status: status,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://taximania-api.onrender.com/api/property/", property, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
          Authorization: "Bearer " + AccessToken,
        },
      })
      .then((res) => {
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "Property Created Successfully",
          variant: "success",
          open: true,
        });
        handleAdd2();
        localStorage.setItem("property-detail", JSON.stringify(res.data));
      })
      .catch((err) => {
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
        className="modal-cont-details modal-comp-form"
        onSubmit={handleSubmit}
      >
        <div className="top">
          <h1>Add Property</h1>
          <span>
            <AiOutlineClose onClick={handleAdd2} className="icon" />
          </span>
        </div>
        <hr />
        <div>
          <label>Property Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Investor Username"
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Investor Username"
          />
        </div>
        <div>
          <select
            id=""
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            name="company"
            style={{ width: "100%", cursor: "pointer" }}
          >
            <option value="waitlist">waitlist</option>
            <option value="live">live</option>
          </select>
        </div>
        <div>
          <button disabled={loading}>
            {loading ? "LOADING..." : "CREATE PROPERTY"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
