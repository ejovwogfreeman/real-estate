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
// import FindApartmentDetail2 from "./pages/FindApartmentDetail2";
import Modal from "./components/FindApartmentDetail/Modal";
import ToastifyComponent from "./context/ToastifyContext";
import Corporate from "./pages/Corporate";
import UserComponent from "./context/UserContext";
import Toastify from "./components/Toastify";
import Signup from "./admin/SignUp";
import Signin from "./admin/Signin";
import Verify from "./admin/Verify";
import Dashboard from "./admin/Dashboard";
import HomeComp from "./pages/HomeComp";
// import CreateInvestor from "./pages/CreateInvestor";
// import WaitList from "./pages/WaitLisit2";
import WaitList from "./pages/WaitList";
import EditProperty from "./admin/Modals/EditProperty";
import UnitsUnderProperty from "./admin/Modals/UnitsUnderProperty";
// import EditUnit from "./admin/Modals/EditUnit";
import FindApartmentDetail from "./pages/FindApartmentDetail";
import ReserveUnit from "./pages/ReserveUnit";
import ReserveUnitSuccess from "./pages/ReserveUnitSuccess";
import ProtectedRoutes from "./components/ProtectedRoutes";

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
  const [countState, setCountState] = useState([]);

  const clearCount = () => {
    setCountState([]);
  };

  const handleIncrease = (unit) => {
    const exist = countState.find((x) => x.id === unit.id);
    // console.log(exist);
    if (exist) {
      setCountState(
        countState.map((x) =>
          x.id === unit.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCountState([...countState, { ...unit, quantity: 1 }]);
    }
    // console.log(countState);
  };

  const handleDecrease = (unit) => {
    const exist = countState.find((x) => x.id === unit.id);
    // console.log(exist);
    if (exist.quantity === 1) {
      setCountState(countState.filter((x) => x.id !== unit.id));
    } else {
      setCountState(
        countState.map((x) =>
          x.id === unit.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
    // console.log(countState);
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
                <Route exact path="/" element={<HomeComp />} />
                <Route exact path="/about_us" element={<Aboutus />} />
                <Route
                  exact
                  path="/find_apartment/search"
                  element={<FindApartmentSearch />}
                />
                <Route
                  exact
                  path="/find_apartment/detail/:id"
                  element={
                    <FindApartmentDetail
                      closeModal={closeModal}
                      openModal={openModal}
                      countState={countState}
                      handleIncrease={handleIncrease}
                      handleDecrease={handleDecrease}
                      unitr
                    />
                  }
                />
                <Route
                  exact
                  path="/find_apartment"
                  element={<FindApartment />}
                />
                <Route exact path="/investor_login" element={<Login />} />
                <Route exact path="/join_waitlist/" element={<WaitList />} />
                <Route exact path="/join_waitlist/:id" element={<WaitList />} />
                <Route exact path="/corporate-tenant" element={<Corporate />} />
                <Route element={<ProtectedRoutes />}>
                  <Route
                    path="/reserve_unit/:id"
                    element={
                      <ReserveUnit
                        countState={countState}
                        clearCount={clearCount}
                      />
                    }
                  />
                </Route>
                <Route element={<ProtectedRoutes />}>
                  <Route
                    path="/reserve_unit_success"
                    element={<ReserveUnitSuccess />}
                  />
                </Route>
                <Route path="/admin_signup" element={<Signup />} />
                <Route path="/admin_verify" element={<Verify />} />
                <Route path="/admin_signin" element={<Signin />} />
                <Route path="/admin_dashboard" element={<Dashboard />} />
                <Route path="/edit_property/:id" element={<EditProperty />} />
                <Route
                  path="/property_unit/:id"
                  element={<UnitsUnderProperty />}
                />
              </Routes>
            </BrowserRouter>
          </div>
        </ToastifyComponent>
      </UserComponent>
    </>
  );
}

export default App;
