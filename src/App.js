// import logo from './logo.svg';
import "./App.css";
import {
  Routes,
  Route,
  // Navigate,
  // Outlet,
  BrowserRouter,
  // useSearchParams,
} from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import FindApartmentSearch from "./pages/FindApartmentSearch";
import Login from "./pages/Login";
import Aboutus from "./pages/Aboutus";
import FindApartment from "./pages/FindApartment";
import FindApartmentDetail from "./pages/FindApartmentDetail";
import Modal from "./components/FindApartmentDetail/Modal";
import ToastifyComponent from "./context/ToastifyContext";
import Corporate from "./pages/Corporate";
import UserComponent from "./context/UserContext";
import Toastify from "./components/Toastify";
import Signup from "./admin/SignUp";
import Signin from "./admin/Signin";
import Verify from "./admin/Verify";
import Dashboard from "./admin/Dashboard";
import CreateInvestor from "./admin/CreateInvestor";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalStage, setModalStage] = useState("");

  const openModal = (stage) => {
    setShowModal(true);
    setModalStage(stage);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalStage("");
  };

  return (
    <>
      <UserComponent>
        <ToastifyComponent>
          <div style={{ position: "fixed", zIndex: "1000000" }}>
            <Toastify />
          </div>
          <div className={`${showModal ? " h-screen overflow-hidden" : ""}`}>
            <BrowserRouter>
              {showModal && (
                <Modal
                  closeModal={closeModal}
                  openModal={openModal}
                  modalStage={modalStage}
                />
              )}

              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/about-us" element={<Aboutus />} />
                <Route
                  exact
                  path="/find-apartment/search"
                  element={<FindApartmentSearch />}
                />
                <Route
                  exact
                  path="/find-apartment/detail"
                  element={
                    <FindApartmentDetail
                      closeModal={closeModal}
                      openModal={openModal}
                    />
                  }
                />
                <Route
                  exact
                  path="/find-apartment"
                  element={<FindApartment />}
                />
                <Route exact path="/investor-login" element={<Login />} />
                <Route exact path="/corporate-tenant" element={<Corporate />} />
                <Route path="/admin_signup" element={<Signup />} />
                <Route path="/admin_verify" element={<Verify />} />
                <Route path="/admin_signin" element={<Signin />} />
                <Route path="/admin_dashboard" element={<Dashboard />} />
                <Route path="/admin_create" element={<CreateInvestor />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ToastifyComponent>
      </UserComponent>
    </>
  );
}

export default App;

// nddc password
// RECOARdiU1HIw
