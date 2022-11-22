import React, { useState } from "react";
import "../css/Admin.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastifyContext } from "../context/ToastifyContext";
import { UserContext } from "../context/UserContext";
import { createInvest } from "../api";

const CreateInvestor = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const { username, email } = user;

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [UserState, setUserState] = React.useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("user")).AccessToken;
    const create = await createInvest(token, user);

    if (create.AccessToken) {
      localStorage.setItem("user", JSON.stringify(create));
      setUserState(create);
      setToastifyState({
        ...ToastifyState,
        message: create.message,
        variant: "success",
        open: true,
      });
      navigate("/admin_dashboard");
      setLoading(false);
    } else {
      setToastifyState({
        ...ToastifyState,
        message: create.message,
        variant: "error",
        open: true,
      });
      console.log(create.message);
      setLoading(false);
    }
  };

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
