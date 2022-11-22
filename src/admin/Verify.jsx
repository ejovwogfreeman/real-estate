import React, { useState } from "react";
import "../css/Admin.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastifyContext } from "../context/ToastifyContext";
import { UserContext } from "../context/UserContext";
import { verifyUser } from "../api";

const Verify = () => {
  const [user, setUser] = useState({
    email: "",
    usercode: "",
    admincode: "",
  });
  const { email, usercode, admincode } = user;

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
    const verify = await verifyUser(user);

    if (verify.message) {
      localStorage.setItem("user", JSON.stringify(verify));
      setUserState(verify);
      setToastifyState({
        ...ToastifyState,
        message: verify.message,
        variant: "success",
        open: true,
      });
      navigate("/admin_signin");
      setLoading(false);
    } else {
      setToastifyState({
        ...ToastifyState,
        message: verify.message,
        variant: "error",
        open: true,
      });
      console.log(verify.message);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>VERIFICATION FORM</h2>
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
          <label>Usercode</label>
          <input
            type="number"
            name="usercode"
            value={usercode}
            onChange={handleChange}
            placeholder="Enter Your Usercode"
            required
          />
        </div>
        <div>
          <label>Admincode</label>
          <input
            type="number"
            name="admincode"
            value={admincode}
            onChange={handleChange}
            placeholder="Enter Your Admincode"
            required
          />
        </div>
        <button disabled={loading}>{loading ? "LOADING..." : "VERIFY"}</button>
      </form>
    </div>
  );
};

export default Verify;
