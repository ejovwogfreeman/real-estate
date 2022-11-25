// import React from "react";
// import "./Modal.css";
// import { AiOutlineClose } from "react-icons/ai";

// const UnitModal = ({ handleChange3 }) => {
//   return (
//     <div className="modal-cont">
//       <div className="modal-cont-details">
//         <div className="top">
//           <h1>All Units</h1>
//           <span>
//             <AiOutlineClose onClick={handleChange3} className="icon" />
//           </span>
//         </div>
//         <hr />
//       </div>
//     </div>
//   );
// };

// export default UnitModal;

import React, { useState, useEffect } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { ToastifyContext } from "../../context/ToastifyContext";
// import { useNavigate } from "react-router-dom";

const UnitModal = ({ handleChange3 }) => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("https://taximania-api.onrender.com/api/unit", (res) => {
        res.json();
      })
      .then((data) => setProperty(data.data.properties));
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
    const deleteProp = property.filter((x) => x.id == id);
    const deletePropId = deleteProp[0].id;
    axios
      .delete(
        `https://taximania-api.onrender.com/api/property/${deletePropId}`,
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
          message: "Property Deleted successfully",
          variant: "success",
          open: true,
        });
        setLoading(false);
        handleChange3();
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
          <h1>All Units</h1>
          <span>
            <AiOutlineClose onClick={handleChange3} className="icon" />
          </span>
        </div>
        <hr />
        {property.map((x) => {
          return (
            <div
              key={x.id}
              className="d-flex align-items-center justify-content-between"
            >
              <p>{x.name}</p>
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
      </div>
    </div>
  );
};

export default UnitModal;
