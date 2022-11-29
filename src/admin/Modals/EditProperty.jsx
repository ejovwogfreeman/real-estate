import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { ToastifyContext } from "../../context/ToastifyContext";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditProperty = ({ handleAdd2 }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("waitlist");

  const params = useParams();

  const [prop, setProp] = useState({});
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
        setName(data.data.property.name);
        setLocation(data.data.property.location);
        setStatus(data.data.property.status);
      });
  }, [params.id]);

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

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log(property);
    e.preventDefault();
    setLoading(true);
    axios
      .patch(
        `https://taximania-api.onrender.com/api/property/${params.id}`,
        property,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "applicatioon/json",
            Authorization: "Bearer " + AccessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "Property Updated Successfully",
          variant: "success",
          open: true,
        });
        navigate("/admin_dashboard");
        localStorage.setItem("updated-property-detail", JSON.stringify(res));
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
        className="modal-cont-details modal-comp-form p-3 pt-4"
        onSubmit={handleSubmit}
      >
        <div className="top">
          <h1 className="h3">Edit Property</h1>
          <Link to="/admin_dashboard">
            <AiOutlineClose className="icon" />
          </Link>
        </div>
        <hr className="mb-3" />
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
            {loading ? "LOADING..." : "UPDATE PROPERTY"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProperty;
