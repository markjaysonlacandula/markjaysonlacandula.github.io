import React from "react";

const NavButton = (props) => {
  return (
    <li>
      <button
        onClick={props.onClick}
        className="bg-left-bottom bg-gradient-to-r from-personal-primaryDark to-personal-primaryLight bg-no-repeat transition-all duration-300 ease-out bg-[length:0%_3px] hover:bg-[length:100%_3px] hover:-translate-y-1 dark:from-personal-secondaryDark dark:to-personal-secondaryLight"
      >
        {props.children}
      </button>
    </li>
  );
};

export default NavButton;
