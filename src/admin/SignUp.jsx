import React, { useState } from "react";
import "../css/Admin.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastifyContext } from "../context/ToastifyContext";
import axios from "axios";

const Signup = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = user;
  const [confirmPassword, setConfirmPassword] = useState("");

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

    if (password.length < 8) {
      setToastifyState({
        ...ToastifyState,
        message: "Passwords must be at least 8 characters long",
        variant: "error",
        open: true,
      });
      return setLoading(false);
    }

    if (user.password !== confirmPassword) {
      setToastifyState({
        ...ToastifyState,
        message: "Passwords does not match",
        variant: "error",
        open: true,
      });
      return setLoading(false);
    }
    axios
      .post("https://taximania-api.onrender.com/api/auth/register", user, {
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
        navigate("/admin_verify");
        localStorage.setItem("signup-detail", JSON.stringify(res.data));
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
        console.log(ToastifyState);
      });
  };
  // const { username, email, password } = user;
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  // const [UserState, setUserState] = React.useContext(UserContext);

  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   if (password.length < 8) {
  //     setToastifyState({
  //       ...ToastifyState,
  //       message: "Passwords must be at least 8 characters long",
  //       variant: "error",
  //       open: true,
  //     });
  //     return setLoading(false);
  //   }

  //   if (user.password !== confirmPassword) {
  //     setToastifyState({
  //       ...ToastifyState,
  //       message: "Passwords does not match",
  //       variant: "error",
  //       open: true,
  //     });
  //     return setLoading(false);
  //   }

  //   const register = await registerUser(user);

  //   if (register.user) {
  //     localStorage.setItem("user", JSON.stringify(register));
  //     setUserState(register);
  //     setToastifyState({
  //       ...ToastifyState,
  //       message: register.message,
  //       variant: "success",
  //       open: true,
  //     });
  //     navigate("/admin_verify");
  //     setLoading(false);
  //   } else {
  //     setToastifyState({
  //       ...ToastifyState,
  //       message: register.message,
  //       variant: "error",
  //       open: true,
  //     });
  //     console.log(register.message);
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>REGISTER FORM</h2>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter Your Username"
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
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Your Passwrod"
            required
          />
        </div>
        <button disabled={loading}>
          {loading ? "LOADING..." : "REGISTER"}
        </button>
        <section style={{ marginTop: "20px" }}>
          <small>
            Already have an account? <Link to="/admin_signin">Sign In</Link>
          </small>
        </section>
      </form>
    </div>
  );
};

export default Signup;
