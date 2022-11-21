import React, { useState } from "react";

const CarouselApartment = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="relative w-full">
      <div className="absolute top-[45%] z-20 py-5 px-1 bg-teal-600 rounded-lg left-0">
        <button
          type="button"
          onClick={() =>
            setCurrentImage((prevState) =>
              prevState === 0 ? prevState : prevState - 1
            )
          }
          className="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="carousel-inner h-[500px] relative w-full overflow-hidden rounded-lg">
        <img
          className="h-[600px] w-full "
          src={images[currentImage]}
          alt="current"
        />
      </div>
      <div className="absolute top-[45%] z-20 py-5 px-1 bg-teal-600 rounded-lg right-0">
        <button
          type="button"
          onClick={() =>
            setCurrentImage((prevState) =>
              prevState === images.length - 1 ? prevState : prevState + 1
            )
          }
          className="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarouselApartment;
