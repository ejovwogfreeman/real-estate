import React, { useState } from "react";
import "../css/Admin.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastifyContext } from "../context/ToastifyContext";
// import { UserContext } from "../context/UserContext";
// import { createInvest } from "../api";
import axios from "axios";

const CreateInvestor = () => {
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
      return null;
    }
  };

  const AccessToken = getToken();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post("https://recoa-api.herokuapp.com/api/auth/createinvestor", user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
          Authorization: "Bearer " + AccessToken,
        },
      })
      .then((res) => {
        console.log(res.data.message);
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: res.data.message,
          variant: "success",
          open: true,
        });
        navigate("/admin_dashboard");
        localStorage.setItem("investor-detail", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: err.response.data.message,
          variant: "error",
          open: true,
        });
      });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const token = JSON.parse(localStorage.getItem("user")).AccessToken;
  //   const create = await createInvest(token, user);

  // if (create.AccessToken) {
  // localStorage.setItem("investor", JSON.stringify(create));
  // setUserState(create);
  // setToastifyState({
  //   ...ToastifyState,
  //   message: create.message,
  //   variant: "success",
  //   open: true,
  // });
  // console.log(create);
  // navigate("/admin_dashboard");
  // setLoading(false);
  // } else {
  //   setToastifyState({
  //     ...ToastifyState,
  //     message: create.message,
  //     variant: "error",
  //     open: true,
  //   });
  //   console.log(create.message);
  //   setLoading(false);
  // }
  // };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>CREATE INVESTOR</h2>
        <div>
          <label>Investor Name(Company Name)</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter Investor Username"
            required
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
            required
          />
        </div>
        <button disabled={loading}>
          {loading ? "LOADING..." : "CREATE INVESTOR"}
        </button>
      </form>
    </div>
  );
};

export default CreateInvestor;
