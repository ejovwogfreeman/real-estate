import React, { useState } from "react";
import "../css/Admin.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastifyContext } from "../context/ToastifyContext";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../api";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

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
    const login = await loginUser(user);

    if (login.success) {
      localStorage.setItem("user", JSON.stringify(login));
      setUserState(login);
      setToastifyState({
        ...ToastifyState,
        message: login.message,
        variant: "success",
        open: true,
      });
      navigate("/admin_dashboard");
      setLoading(false);
    } else {
      setToastifyState({
        ...ToastifyState,
        message: login.message,
        variant: "error",
        open: true,
      });
      console.log(login.message);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>LOGIN FORM</h2>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button disabled={loading}>{loading ? "LOADING..." : "LOGIN"}</button>
        <section style={{ marginTop: "20px" }}>
          <small>
            New here? <Link to="/admin_signup">Sign up</Link>
          </small>
        </section>
      </form>
    </div>
  );
};

export default Signin;
