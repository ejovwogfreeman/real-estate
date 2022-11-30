import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  let user = JSON.parse(sessionStorage.getItem("investor-detail"));
  return user;
};

const ProtectedRoutes = () => {
  const userAuth = Auth();

  return userAuth ? <Outlet /> : <Navigate to="/investor_login" />;
};

export default ProtectedRoutes;
