import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background_image from "../images/Rectangle 46 (1).jpg";
import ScrollToTop from "../components/ScrollToTop";
import "../css/Main.css";
import NavbarComp from "../components/NavbarComp";

const Login = () => {
  const [form, setForm] = useState({
    company: "company 1",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/find-apartment/search");
  };
  const style = {
    background: "black",
  };
  return (
    <>
      <NavbarComp style={style} />
      <div className="h-screen relative">
        <ScrollToTop />
        <div
          className="w-full h-full absolute blur  contrast-[0.4]"
          style={{
            backgroundImage: `url("${Background_image}")`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-full h-full z-10 relative flex flex-row justify-center items-center">
          <div className="content flex flex-col items-center -mt-20">
            <div className="text-6xl mb-3 font-extrabold text-red-900">
              ExxonMobil
            </div>
            <form action="" onSubmit={handleSubmit} className="login-form">
              <select
                id=""
                onChange={handleChange}
                value={form.company}
                name="company"
                required
              >
                <option value="Company 1">company 1</option>
                <option value="Company 2">company 2</option>
                <option value="Company 3">company 3</option>
                <option value="Company 4">company 4</option>
                <option value="Company 5">company 5</option>
              </select>
              <input
                type="text"
                onChange={handleChange}
                value={form.password}
                name="password"
                required
                placeholder="Enter Password"
              />
              <button>Login</button>
            </form>

            {/* <div className="flex bg-white justify-between items-center py-3 px-4 rounded-lg w-full mt-5">
              <input
                className="appearance-none text-xl"
                name="password"
                placeholder="Enter Password"
                type="password"
              />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </span>
            </div>

            <div className="relative mt-10 flex flex-row justify-center">
              <button
                onClick={() => navigate("/find-apartment/search")}
                className="px-12 py-2 border-4 text-xl text-white border-white rounded-full uppercase"
                type="button"
              >
                {" "}
                Login{" "}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
