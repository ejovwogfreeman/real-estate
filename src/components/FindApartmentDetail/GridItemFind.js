import React from "react";
import { BiBath, BiMoviePlay } from "react-icons/bi";
import { AiFillBank } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

export const GridItemFind = ({
  item,
  className,
  gridPage,
  closeModal,
  openModal,
}) => {
  // const navigate = useNavigate()
  return (
    <div
      className={`relative rounded-xl overflow-hidden w-[350px] h-[300px] ${className}`}
    >
      <div
        className="w-full h-full absolute  contrast-[0.4]"
        style={{
          backgroundImage: `url("${item}")`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full relative h-full z-10 py-3 px-3 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-7 text-white mt-12 mb-5">
          <div className="flex flex-row items-center gap-3">
            {" "}
            <BiMoviePlay /> Studio
          </div>
          <div className="flex flex-row items-center gap-3">
            {" "}
            <BiBath /> 1 Bath
          </div>
          <div className="flex flex-row items-center gap-3">
            {" "}
            <AiFillBank /> 51 sq.m
          </div>
        </div>

        <div className="text-white mb-3">
          {" "}
          <span className="text-3xl text-bolder ">3</span> available
        </div>

        <div className="bg-white/70 px-4 rounded-lg mb-5">
          Starting at $7800/annum
        </div>

        <div>
          <button
            onClick={() => (gridPage ? openModal("reserve") : null)}
            className="px-5 py-1 border-2 text-xs text-white border-white rounded-full uppercase"
            type="button"
          >
            {" "}
            Reserve{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
