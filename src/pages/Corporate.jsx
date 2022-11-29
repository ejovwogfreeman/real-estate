import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import "../css/Main.css";
import NavbarComp from "../components/NavbarComp";

const Corporate = () => {
  const style = {
    background: "rgb(2, 86, 144)",
  };
  return (
    <>
      <NavbarComp style={style} />
      <div className="h-screen top-space">
        <ScrollToTop />
        <h1>Corporate Tenants</h1>
      </div>
    </>
  );
};

export default Corporate;
