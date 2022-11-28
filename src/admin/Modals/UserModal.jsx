import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { ToastifyContext } from "../../context/ToastifyContext";
// import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

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
      console.log("no token");
      return null;
    }
  };

  const handleDelete = (id) => {
    setLoading(true);
    const AccessToken = getToken();
    const InvestorId = investors.filter((x) => x.id == id);
    const deleteInvestorId = InvestorId[0].id;
    console.log(deleteInvestorId);
    axios
      .delete(
        `https://taximania-api.onrender.com/api/auth/investor/${deleteInvestorId}`,
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
          message: "Investor Deleted successfully",
          variant: "success",
          open: true,
        });
        setLoading(false);
        handleChange1();
      })
      .catch((err) => {
        console.log(err);
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
          <h1 className="h6">All Investors</h1>
          <span>
            <AiOutlineClose onClick={handleChange1} className="icon" />
          </span>
        </div>
        <hr />
        {investors.length > 0 ? (
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
                    {loading ? "LOADING" : <BsTrash />}
                  </button>
                </div>
              );
            })}
          </>
        ) : (
          <p>Loading Investors...</p>
        )}
      </div>
    </div>
  );
};

export default UserModal;
