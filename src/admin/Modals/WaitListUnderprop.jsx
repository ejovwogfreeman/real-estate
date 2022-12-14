import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { ToastifyContext } from "../../context/ToastifyContext";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const WaitListUnderProp = ({ handleAdd2 }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  console.log(params.id);
  const [prop, setProp] = useState([]);

  const getToken = () => {
    try {
      let token = JSON.parse(localStorage.getItem("admin-detail")).AccessToken;
      return token;
    } catch (err) {
      console.log("no token");
      return null;
    }
  };

  const AccessToken = getToken();

  useEffect(() => {
    axios
      .get(
        `https://taximania-api.onrender.com/api/property/waitlist/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "applicatioon/json",
            Authorization: "Bearer " + AccessToken,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: res.data.message,
          variant: "success",
          open: true,
        });
        setProp(res.data.waitlists);
        console.log(res.data.waitlists);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message) {
          setLoading(false);
          setToastifyState({
            ...ToastifyState,
            message: err.response.data.message,
            variant: "error",
            open: true,
          });
        } else {
          setLoading(false);
          setToastifyState({
            ...ToastifyState,
            message: "Please Fill All Fields",
            variant: "error",
            open: true,
          });
        }
      });
  }, []);

  return (
    <div className="modal-cont">
      <div className="modal-cont-details modal-comp-form p-3 pt-4">
        <div className="top">
          <h1 className="h5">Waitlist under Property</h1>
          <Link to="/admin_dashboard">
            <AiOutlineClose className="icon" />
          </Link>
        </div>
        <hr className="mb-3" />
        {prop.length > 0 ? (
          <>
            {prop.map((x, index) => {
              return (
                <div
                  key={x.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <p>
                    {index + 1}.&nbsp;{x.name} &nbsp;
                  </p>
                </div>
              );
            })}
          </>
        ) : (
          <p>Loading Waitlists...</p>
        )}
      </div>
    </div>
  );
};

export default WaitListUnderProp;
