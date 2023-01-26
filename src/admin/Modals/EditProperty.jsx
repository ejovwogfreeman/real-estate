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
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("waitlist");
  // const [fileInput, setFileInput] = useState([]);

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

  const params = useParams();
  const navigate = useNavigate();

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
        setDescription(data.data.property.description);
        setLocation(data.data.property.location);
        setStatus(data.data.property.status);
      });
  }, [params.id]);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = { name, location, status, description };
    console.log(form);

    axios
      .patch(
        `https://taximania-api.onrender.com/api/property/${params.id}`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "applicatioon/json",
            Authorization: "Bearer " + AccessToken,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "Property Updated Successfully",
          variant: "success",
          open: true,
        });
        localStorage.setItem("property-detail", JSON.stringify(res.data));
        navigate("/admin_dashboard");
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
        className="modal-cont-details modal-comp-form p-3"
        onSubmit={handleSubmit}
      >
        <div className="top">
          <h1 className="h6">Update Property</h1>
          <span>
            <Link to="/admin_dashboard">
              <AiOutlineClose className="icon" />
            </Link>
          </span>
        </div>
        <hr className="my-3" />
        <div>
          <label>Property Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Property Name"
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Property Location"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Property Description"
            required
          ></textarea>
        </div>
        {/* <div>
          <label>Thumbnail</label>
          <input
            onChange={(e) => {
              setFileInput(e.target.files);
            }}
            multiple
            type="file"
          />
        </div> */}
        <div>
          <select
            id=""
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            name="company"
            style={{ width: "100%", cursor: "pointer" }}
            required
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
