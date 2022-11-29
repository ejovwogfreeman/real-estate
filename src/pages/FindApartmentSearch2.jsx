import React, { useState } from "react";
import Background_image from "../images/Rectangle 66.jpg";
import CustomDropDown from "../components/CustomDropDown";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import "../css/Main.css";
import NavbarComp from "../components/NavbarComp";

const FindApartmentSearch = () => {
  const [selectArea, setSelectArea] = useState(
    "Preleasing Open to Corporate tenants"
  );
  const navigate = useNavigate();
  const style = {
    background: "rgb(2, 86, 144)",
  };
  return (
    <>
      <NavbarComp style={style} />
      <div className="h-screen relative" style={{ paddingTop: "80px" }}>
        <ScrollToTop />
        <div
          className="w-full h-full absolute  contrast-[0.4]"
          style={{
            backgroundImage: `url("${Background_image}")`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-full h-full z-10 relative flex flex-row justify-center items-center">
          <div className="content flex flex-col items-center -mt-20">
            <div className="text-6xl mb-3 font-extrabold text-white">
              Recoa Square
            </div>
            <div className="mb-8 text-white text-xl">
              425 City Apartments in the heart of Victoria Island
            </div>

            <div className="relative">
              <CustomDropDown
                selectItem={selectArea}
                setSelectItem={setSelectArea}
                dropType="relative"
                Values={[
                  "Ikeja",
                  "Apapa",
                  "Victoria Island",
                  "Ajah LA, Nigeria",
                ]}
              />
              <div className="relative mt-10 flex flex-row justify-center">
                <button
                  onClick={() => navigate("/find_apartment/detail")}
                  className="px-5 py-2 border-4 text-xl text-white border-white rounded-full uppercase"
                  type="button"
                >
                  {" "}
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindApartmentSearch;
