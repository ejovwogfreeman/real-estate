import React, { useState } from "react";
import "../css/Main.css";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [select, setSelect] = useState("Ajah LA, Nigeria");
  return (
    <header className="background">
      <div>
        <h1 className="h2 fw-bold">Find Your New Home Here</h1>
        <form action="" className="select-form my-5-lg my-3">
          <select
            id=""
            onChange={(e) => setSelect(e.target.value)}
            value={select}
            name="company"
            required
          >
            <option value="Ajah LA, Nigeria">Ajah LA, Nigeria</option>
            <option value="Ikeja">Ikeja</option>
            <option value="Apapa">Apapa</option>
            <option value="Victoria Island">Victoria Island</option>
          </select>
          <button>
            <BsSearch />
          </button>
        </form>
        <p>Find Rental Appartment Homes in the bussiness district of Lagos</p>
      </div>
    </header>
  );
};

export default Header;
