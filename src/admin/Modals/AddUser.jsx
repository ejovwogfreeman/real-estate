import React, { useState } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { ToastifyContext } from "../../context/ToastifyContext";
import axios from "axios";

const AddUser = ({ handleAdd1 }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const { username, email } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

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
    console.log(AccessToken);
    setLoading(true);
    e.preventDefault();
    axios
      .post(
        "https://taximania-api.onrender.com/api/auth/createinvestor",
        user,
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
        console.log(res.data.message);
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: res.data.message,
          variant: "success",
          open: true,
        });
        handleAdd1();
        localStorage.setItem("investor-detail", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message) {
          setLoading(false);
          setToastifyState({
            ...ToastifyState,
            message: err.response.data.message,
            variant: "error",
            open: true,
          });
        } else {
          setLoading(false);
          setToastifyState({
            ...ToastifyState,
            message: "Please Fill All Fields",
            variant: "error",
            open: true,
          });
        }
      });
  };
  return (
    <div className="modal-cont">
      <form
        className="modal-cont-details modal-comp-form"
        onSubmit={handleSubmit}
      >
        <div className="top">
          <h1 className="h6">Add Investor</h1>
          <span>
            <AiOutlineClose onClick={handleAdd1} className="icon" />
          </span>
        </div>
        <hr />
        <div>
          <label>Investor Name(Company Name)</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter Investor Username"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Investor Email"
          />
        </div>
        <div>
          <button disabled={loading}>
            {loading ? "LOADING..." : "CREATE INVESTOR"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
