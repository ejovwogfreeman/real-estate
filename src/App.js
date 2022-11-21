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
import Navbar from "./components/Navbar";
import FindApartmentSearch from "./pages/FindApartmentSearch";
import Login from "./pages/Login";
import Aboutus from "./pages/Aboutus";
import FindApartment from "./pages/FindApartment";
import FindApartmentDetail from "./pages/FindApartmentDetail";
import Modal from "./components/FindApartmentDetail/Modal";

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
      <div className={`${showModal ? " h-screen overflow-hidden" : ""}`}>
        <BrowserRouter>
          {showModal && (
            <Modal
              closeModal={closeModal}
              openModal={openModal}
              modalStage={modalStage}
            />
          )}
          <Navbar />
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
            <Route exact path="/find-apartment" element={<FindApartment />} />
            <Route exact path="/recoa-communities" element={<Login />} />
            <Route
              exact
              path="/corporate-tenant"
              element={<>corporate tenant</>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
