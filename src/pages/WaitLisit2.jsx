import React from "react";
// import { GridItemFind } from '../GridItemFind'
// import ModalButton from "./ModalButton";
import ModalButton from "../components/FindApartmentDetail/ModalSections/ModalButton";

// import car_image1 from '../../../images/Rectangle 66.jpg'

export const WaitList = ({ closeModal, openModal }) => {
  return (
    <div className="flex flex-row items-center">
      <div>
        <div
          className={`scale-75 text-white text-xl rounded-xl overflow-hidden w-[350px] h-[300px] border-2 border-white py-5 px-2`}
        >
          <p>
            Recoa will be releasing 1,485 units in Lagos over the next 24 months
            Torease with orices as lOw S3.500/annum.
          </p>

          <p className="mt-5">
            Let us know what vou needand vou will be the hrst to know wher It
            Decomes available
          </p>
        </div>
      </div>
      <div>
        <form className="bg-white py-5 px-3 rounded-lg shadow-lg">
          <div className="text-center text-2xl text-emerald-800 font-extrabold">
            Reserve
          </div>
          <div className="flex flex-row gap-2 justify-center my-4">
            <input
              className="bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3"
              name=""
              type="text"
              placeholder="First name"
            />
            <input
              className="bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3"
              name=""
              type="text"
              placeholder="Last name"
            />
          </div>

          <div className="flex flex-row gap-2 justify-center my-4">
            <input
              className="bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3"
              name=""
              type="text"
              placeholder="Telephone"
            />
            <input
              className="bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3"
              name=""
              type="text"
              placeholder="Organization"
            />
          </div>

          <div className="flex flex-row gap-2 justify-center my-4">
            <input
              className="bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3"
              name=""
              type="text"
              placeholder="Budget"
            />
            <input
              className="bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3"
              name=""
              type="text"
              placeholder="Unit"
            />
          </div>

          <div className="flex flex-row gap-2 justify-center my-4">
            <input
              className="bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3 w-full"
              name=""
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-row gap-2 justify-center my-4">
            <input
              className="bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3 w-full"
              name=""
              type="text"
              placeholder="Where do you want to live"
            />
          </div>

          <div className="flex flex-row gap-2 justify-center my-4">
            <input
              className="bg-emerald-800/20 rounded-lg shadow text-black font-semibold px-3 py-3 w-full"
              name=""
              type="text"
              placeholder="Desired move-in date"
            />
          </div>

          <div className="my-4 text-center text-black">Comments</div>

          <ModalButton
            onClick={(event) => {
              event.stopPropagation();
              openModal("wait-list");
            }}
            className="px-5 py-4 text-xl w-full"
            type="button"
          >
            ADD ME TO WISHLIST
          </ModalButton>
        </form>
      </div>
    </div>
  );
};

export default WaitList;
