import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { ToastifyContext } from "../../context/ToastifyContext";
// import { useNavigate } from "react-router-dom";

const UserModal = ({ handleChange1 }) => {
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

  const getToken = () => {
    try {
      let token = JSON.parse(localStorage.getItem("admin-detail")).AccessToken;
      return token;
    } catch (err) {
      console.elog("no token");
      return null;
    }
  };

  const handleDelete = (id) => {
    setLoading(true);
    const AccessToken = getToken();
    const deleteProp = investors.filter((x) => x.id == id);
    const deletePropId = deleteProp[0].id;
    axios
      .delete(
        `https://taximania-api.onrender.com/api/investors/${deletePropId}`,
        {
          headers: {
            Authorization: `Bearer ${AccessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setToastifyState({
          ...ToastifyState,
          message: "Investors Deleted successfully",
          variant: "success",
          open: true,
        });
        setLoading(false);
        handleChange1();
      })
      .catch((err) => {
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "An Error Occured",
          variant: "error",
          open: true,
        });
      });
  };

  return (
    <div className="modal-cont">
      <div className="modal-cont-details">
        <div className="top">
          <h1>All Investors</h1>
          <span>
            <AiOutlineClose onClick={handleChange1} className="icon" />
          </span>
        </div>
        <hr />
        {investors ? (
          <>
            {investors.map((x) => {
              return (
                <div
                  key={x.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <p>{x.username}</p>
                  <button
                    disabled={loading}
                    className="btn btn-outline-danger"
                    onClick={() => {
                      handleDelete(x.id);
                    }}
                  >
                    {loading ? "LOADING" : "DELETE"}
                  </button>
                </div>
              );
            })}
          </>
        ) : (
          <p>There are no Investor yet</p>
        )}
      </div>
    </div>
  );
};

export default UserModal;
