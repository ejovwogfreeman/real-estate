import React, { useState } from "react";

const CustomDropDown = ({ selectItem, setSelectItem, Values, dropType }) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setToggleDropDown((prev) => !prev)}
        className="relative w-full cursor-default rounded-xl text-lg font-bold border border-gray-300 bg-white py-4 pl-3 pr-5 text-left shadow-sm flex flex-row justify-between"
      >
        <span>{selectItem}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <ul
        className={` ${toggleDropDown ? "block" : "hidden"} ${
          dropType || "absolute"
        } z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg`}
      >
        <li
          onClick={() => setToggleDropDown((prev) => !prev)}
          className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
        >
          <div>{selectItem}</div>
        </li>
        {Values?.map((item, index) => {
          return (
            <div key={index}>
              {item !== selectItem ? (
                <li
                  key={index + 1}
                  onClick={() => {
                    setSelectItem(item);
                    setToggleDropDown((prev) => !prev);
                  }}
                  className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                >
                  <div key={index + 1}>{item}</div>
                </li>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomDropDown;
