import React, { useState } from "react";
import "../css/Admin.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastifyContext } from "../context/ToastifyContext";
// import { UserContext } from "../context/UserContext";
// import { loginUser } from "../api";
import axios from "axios";

const Signin = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .post("https://taximania-api.onrender.com/api/auth/login", user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
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
        localStorage.setItem("admin-detail", JSON.stringify(res.data));
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
  //   const login = await loginUser(user);

  //   if (login.AccessToken) {
  //     localStorage.setItem("user", JSON.stringify(login));
  //     setUserState(login);
  //     setToastifyState({
  //       ...ToastifyState,
  //       message: login.message,
  //       variant: "success",
  //       open: true,
  //     });
  //     navigate("/admin_dashboard");
  //     setLoading(false);
  //   } else {
  //     setToastifyState({
  //       ...ToastifyState,
  //       message: login.message,
  //       variant: "error",
  //       open: true,
  //     });
  //     console.log(login.message);
  //     setLoading(false);
  //   }
  // };

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
