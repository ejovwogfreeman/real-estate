import React, { useState } from "react";
import "../css/Main.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastifyContext } from "../context/ToastifyContext";
import axios from "axios";
import NavbarComp from "../components/NavbarComp";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const WaitList = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    telephone: "",
    organisation: "",
    budget: "",
    email: "",
    location: "",
    date: "",
    comment: "",
  });
  const {
    firstname,
    lastname,
    telephone,
    organisation,
    budget,
    email,
    location,
    date,
    comment,
  } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const params = useParams();

  let id = params.id;

  const waitlist = {
    name: firstname + " " + lastname,
    organisation: organisation,
    phone: telephone,
    email: email,
    location: location,
    date: date,
    budget: budget,
    comments: comment,
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(waitlist);
    axios
      .post(
        `https://taximania-api.onrender.com/api/property/joinwaitlist/${id}`,
        waitlist,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "applicatioon/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data.message);
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: res.data.message,
          variant: "success",
          open: true,
        });
        navigate("/");
        localStorage.setItem("investor-detail", JSON.stringify(res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          // message: err.response.data.message,
          message: "an error occured",
          variant: "error",
          open: true,
        });
      });
  };

  const style = {
    background: "rgb(2, 86, 144)",
  };

  return (
    <>
      <NavbarComp style={style} />
      <div className="container" style={{ paddingTop: "120px" }}>
        <ScrollToTop />
        <form action="" onSubmit={handleSubmit} className="join-form mb-4">
          <h2 className="h5 mb-4">JOIN WAIT LIST</h2>
          <div className="flex">
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={handleChange}
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <label>Telephone</label>
              <input
                type="text"
                name="telephone"
                value={telephone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
              />
            </div>
            <div>
              <label>Organisation</label>
              <input
                type="text"
                name="organisation"
                value={organisation}
                onChange={handleChange}
                placeholder="Enter Organisation/Company Name"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <label>Budget</label>
              <input
                type="text"
                name="budget"
                value={budget}
                onChange={handleChange}
                placeholder="Enter Your Budget"
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
              />
            </div>
          </div>
          <div>
            <label>Where do you want to live</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
              placeholder="Enter Location Name"
            />
          </div>
          <div>
            <label>Desired move in date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
              placeholder="Enter Desired Date"
            />
          </div>
          <div>
            <label>Comment</label>
            <textarea
              name="comment"
              value={comment}
              onChange={handleChange}
              placeholder="Leave a Comment"
            ></textarea>
          </div>
          <button disabled={loading}>
            {loading ? "LOADING..." : "JOIN WAITLIST"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default WaitList;
