import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { ToastifyContext } from "../../context/ToastifyContext";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Reserved = ({ handleAdd2 }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  console.log(params.id);

  const [users, setUsers] = useState([]);

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
        `https://taximania-api.onrender.com/api/property/unit/all/reserve/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "applicatioon/json",
            Authorization: "Bearer " + AccessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setUsers(res.data.userreservedunitcountunique);
        setLoading(false);
        // setToastifyState({
        //   ...ToastifyState,
        //   message: res.data.message,
        //   variant: "success",
        //   open: true,
        // });
        // setProp(res.data.waitlists);
        // console.log(res.data.waitlists);
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.data.message) {
        //   setLoading(false);
        //   setToastifyState({
        //     ...ToastifyState,
        //     message: err.response.data.message,
        //     variant: "error",
        //     open: true,
        //   });
        // } else {
        //   setLoading(false);
        //   setToastifyState({
        //     ...ToastifyState,
        //     message: "Please Fill All Fields",
        //     variant: "error",
        //     open: true,
        //   });
        // }
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
        {users.length > 0 ? (
          <>
            {users.map((x, index) => {
              return (
                <div
                  key={index}
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    width: "100%",
                  }}
                  className="pt-1 pb-3"
                >
                  <p>
                    <strong style={{ textTransform: "uppercase" }}>
                      {index + 1}.&nbsp;{x.username} &nbsp;
                    </strong>
                  </p>
                  <p className="d-flex align-items-center justify-content-between">
                    <span style={{ flex: "1" }}>Unit Reserved</span>
                    <span className="me-3">:</span>
                    <span style={{ flex: "1" }}>{x.reserveCount} units</span>
                  </p>
                  <p className="d-flex align-items-center justify-content-between">
                    <span style={{ flex: "1" }}>Reserve Date</span>
                    <span className="me-3">:</span>
                    <span style={{ flex: "1" }}>
                      {new Date(x.reserveDate).toDateString()}
                    </span>
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

export default Reserved;

// password for investor sabinus => RECOAF4vmCG2V
