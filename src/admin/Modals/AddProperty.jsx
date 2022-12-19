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
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("waitlist");
  const [fileInput, setFileInput] = useState([]);

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

  const handleSubmit = (e) => {
    console.log(fileInput);
    setLoading(true);
    e.preventDefault();

    var myHeaders = new Headers();

    myHeaders.append("Authorization", "Bearer " + AccessToken);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("location", location);
    formdata.append("status", status);
    formdata.append("description", description);
    Array.from(fileInput).forEach((img) => {
      formdata.append("file", img);
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://taximania-api.onrender.com/api/property", requestOptions)
      .then((response) => {
        response.text();
        setLoading(false);
      })
      .then((result) => {
        setToastifyState({
          ...ToastifyState,
          message: "Property Created Successfully",
          variant: "success",
          open: true,
        });
        handleAdd2();
        localStorage.setItem("property-detail", JSON.stringify(result.data));
        setLoading(false);
      })
      .catch((error) => {
        setToastifyState({
          ...ToastifyState,
          message: "Property Created Successfully",
          variant: "success",
          open: true,
        });
        setLoading(false);
      });

    // let formData = new FormData();
    // formData.append("name", name);
    // formData.append("location", location);
    // formData.append("description", description);
    // formData.append("status", status);
    // Array.from(image).forEach((img) => {
    //   formData.append("file", img);
    // });

    // axios
    //   .post("https://taximania-api.onrender.com/api/property", formData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "applicatioon/json",
    //       Authorization: "Bearer " + AccessToken,
    //     },
    //   })
    //   .then((res) => {
    //     setLoading(false);
    //     setToastifyState({
    //       ...ToastifyState,
    //       message: "Property Created Successfully",
    //       variant: "success",
    //       open: true,
    //     });
    //     handleAdd2();
    //     localStorage.setItem("property-detail", JSON.stringify(res.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //     setToastifyState({
    //       ...ToastifyState,
    //       message: "Please Fill All Fields",
    //       variant: "error",
    //       open: true,
    //     });
    //   });
  };

  return (
    <div className="modal-cont">
      <form
        className="modal-cont-details modal-comp-form"
        onSubmit={handleSubmit}
      >
        <div className="top">
          <h1 className="h6">Add Property</h1>
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
        <div>
          <label>Thumbnail</label>
          <input
            onChange={(e) => {
              setFileInput(e.target.files);
            }}
            multiple
            type="file"
          />
        </div>
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
            {loading ? "LOADING..." : "CREATE PROPERTY"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
