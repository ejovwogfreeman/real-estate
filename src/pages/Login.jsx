import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background_image from "../images/Rectangle 46 (1).jpg";
import ScrollToTop from "../components/ScrollToTop";
import "../css/Main.css";
import NavbarComp from "../components/NavbarComp";
import { useEffect } from "react";
import axios from "axios";
import { ToastifyContext } from "../context/ToastifyContext";
import Footer from "../components/Footer";

const Login = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    axios
      .get("https://taximania-api.onrender.com/api/auth/investors", (res) => {
        res.json();
      })
      .then((data) => setInvestors(data.data.investors));
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const form = { username: username, password: password };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post("https://taximania-api.onrender.com/api/auth/investorlogin", form, {
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
        navigate("/find_apartment");
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

  return (
    <>
      <NavbarComp />
      <ScrollToTop />
      <div className="background">
        <div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="login-form my-5-lg my-3"
          >
            <h1 className="h3 fw-bold">Recoa Cooperate Tenants Login</h1>
            <select
              id=""
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="company"
              required
            >
              {investors.length > 0 ? (
                <>
                  {" "}
                  {investors.map((x) => {
                    return (
                      <option value={`${x.username}`} key={x.id}>
                        {x.username}
                      </option>
                    );
                  })}
                </>
              ) : (
                <option>Loading Investors...</option>
              )}
            </select>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              required
              placeholder="Enter Password"
            />
            <button disabled={loading}>
              {loading ? "LOADING..." : "LOGIN"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
