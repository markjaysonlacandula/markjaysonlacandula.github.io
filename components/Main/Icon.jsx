import React from "react";

const Icon = (props) => {
  return (
    <li className={props.className}>
      <svg
        className="w-24 h-24 transition-all duration-300 ease-in-out"
        viewBox={props.viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.children}
      </svg>
    </li>
  );
};

export default Icon;
