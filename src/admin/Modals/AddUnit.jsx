import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { ToastifyContext } from "../../context/ToastifyContext";
import axios from "axios";

const AddUnits = ({ handleAdd3 }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState([]);
  const [propertyName, setPropertyName] = useState("");
  const [unitName, setUnitName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [image, setImage] = useState("");

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

  const AccessToken = getToken();

  const handleSubmit = (e) => {
    console.log({ propertyName, unitName, description, price, count, image });
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();
    formData.append("propertyId", propertyName);
    formData.append("name", unitName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("count", count);
    formData.append("file", image);
    axios
      .post("https://taximania-api.onrender.com/api/property/unit", formData, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + AccessToken,
        },
      })
      .then((res) => {
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "Unit Created Successfully",
          variant: "success",
          open: true,
        });
        handleAdd3();
        localStorage.setItem("unit-detail", JSON.stringify(res.data));
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
        className="modal-cont-details modal-comp-form mt-5"
        onSubmit={handleSubmit}
      >
        <div className="top">
          <h1 className="h6">Add Unit</h1>
          <span>
            <AiOutlineClose onClick={handleAdd3} className="icon" />
          </span>
        </div>
        <hr />
        <div>
          <select
            id=""
            onChange={(e) => setPropertyName(e.target.value)}
            value={propertyName}
            name="property"
            required
            style={{ width: "100%" }}
          >
            {property.length > 0 ? (
              <>
                {" "}
                {property.map((x) => {
                  return (
                    <option
                      value={`${x.status === "live" ? x.id : null}`}
                      key={x.id}
                    >
                      {x.status === "live" ? x.name : "On Wait List"}
                    </option>
                  );
                })}
              </>
            ) : (
              <option>Loading Properties...</option>
            )}
          </select>
        </div>
        <div>
          <label>Unit Name</label>
          <input
            type="text"
            value={unitName}
            onChange={(e) => setUnitName(e.target.value)}
            placeholder="Enter Unit Name"
          />
        </div>
        <div>
          <label>Desctiption</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Unit Description"
            style={{
              width: "100%",
              border: "1px solid rgba(0,0,0,0.2)",
              padding: "10px",
              outline: "none",
              borderRadius: "5px",
            }}
          ></textarea>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter Unit Price"
          />
        </div>
        <div>
          <label>Count</label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder="Enter Unit Count"
          />
        </div>
        <div>
          <label>Thumbnail</label>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <button disabled={loading}>
            {loading ? "LOADING..." : "ADD UNIT"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUnits;
