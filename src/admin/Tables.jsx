import React from "react";
import "./Tables.css";
import { MdAdd, MdMinimize } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import UserModal from "./Modals/UserModal";
import PropertyModal from "./Modals/PropertyModal";
import UnitModal from "./Modals/UnitModal";
import AddUser from "./Modals/AddUser";
import AddProperty from "./Modals/AddProperty";
import AddUnit from "./Modals/AddUnit";
import { useState } from "react";

const Tables = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [add1, setAdd1] = useState(false);
  const [add2, setAdd2] = useState(false);
  const [add3, setAdd3] = useState(false);

  const handleChange1 = () => {
    setModal1(!modal1);
  };
  const handleChange2 = () => {
    setModal2(!modal2);
  };
  const handleChange3 = () => {
    setModal3(!modal3);
  };
  const handleAdd1 = () => {
    setAdd1(!add1);
  };
  const handleAdd2 = () => {
    setAdd2(!add2);
  };
  const handleAdd3 = () => {
    setAdd3(!add3);
  };

  let timeDay = new Date().getHours();
  let timeGreet = null;
  if (timeDay < 12) {
    timeGreet = "Good Morinng";
  } else if (timeDay < 16) {
    timeGreet = "Good Afternoon";
  } else if (timeDay < 21) {
    timeGreet = "Good Evening";
  } else {
    timeGreet = "Good Night";
  }

  return (
    <div className="table-container">
      <span className="mb-3 d-block">
        <h1 className="h4">Site Administration</h1>
        <small className="text-muted">Hello Admin, {timeGreet}</small>
      </span>
      <div className="table">
        <div className="tab-heading">Tables</div>
        <ul>
          <li>
            <span
              className="res border-none"
              onClick={() => setModal1(!modal1)}
            >
              Investors
            </span>
            <span className="actions border-none">
              <button onClick={() => setAdd1(!add1)}>
                <MdAdd />
                add
              </button>
              <button onClick={() => setModal1(!modal1)}>
                <BsTrash />
                remove
              </button>
            </span>
          </li>
          <li>
            <span
              className="res border-none"
              onClick={() => setModal2(!modal2)}
            >
              Properties
            </span>
            <span className="actions border-none">
              <button onClick={() => setAdd2(!add2)}>
                <MdAdd />
                add
              </button>
              <button onClick={() => setModal2(!modal2)}>
                <BsTrash />
                remove
              </button>
            </span>
          </li>
          <li>
            <span
              className="res border-none"
              onClick={() => setModal3(!modal3)}
            >
              Units
            </span>
            <span className="actions border-none">
              <button onClick={() => setAdd3(!add3)}>
                <MdAdd />
                add
              </button>
              <button onClick={() => setModal3(!modal3)}>
                <BsTrash />
                remove
              </button>
            </span>
          </li>
        </ul>
        {modal1 ? <UserModal handleChange1={handleChange1} /> : null}
        {modal2 ? <PropertyModal handleChange2={handleChange2} /> : null}
        {modal3 ? <UnitModal handleChange3={handleChange3} /> : null}
        {add1 ? <AddUser handleAdd1={handleAdd1} /> : null}
        {add2 ? <AddProperty handleAdd2={handleAdd2} /> : null}
        {add3 ? <AddUnit handleAdd3={handleAdd3} /> : null}
      </div>
    </div>
  );
};

export default Tables;
