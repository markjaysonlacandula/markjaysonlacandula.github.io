import React from "react";

const IconText = (props) => {
  return (
    <p
      className="text-2xl text-personal-neutralDark font-bold absolute translate-y-16 opacity-0 group-hover:translate-y-24 group-hover:opacity-100 transition-all duration-300 ease-in-out dark:text-personal-neutralLight"
      text={props.text}
    >
      {props.text}
    </p>
  );
};

export default IconText;
