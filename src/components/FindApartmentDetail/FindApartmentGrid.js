import React from "react";
import { GridItemFind } from "./GridItemFind";

const FindApartmentGrid = ({ images, closeModal, openModal }) => {
  return (
    <div className="bg-gradient-to-b from-teal-800 to-teal-600 rounded-lg pt-3 pb-9 mt-52  px-5">
      <div className="text-white text-center mt-6 mb-9 text-2xl font-bold">
        FLOOR PLANS
      </div>
      <div className="grid grid-cols-3 gap-y-8 justify-items-center">
        {images.map((item, index) => (
          <GridItemFind
            closeModal={closeModal}
            openModal={openModal}
            key={index}
            item={item}
            gridPage={true}
          />
        ))}
      </div>
    </div>
  );
};

export default FindApartmentGrid;
