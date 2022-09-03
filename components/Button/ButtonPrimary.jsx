import React from "react";

const ButtonPrimary = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="font-semibold text-base text-personal-neutralDark border-2 border-personal-neutralDark hover:border-personal-primary rounded-lg bg-gradient-to-r from-personal-primaryDark to-personal-primaryLight bg-no-repeat dark:from-personal-secondaryDark dark:to-personal-secondaryLight transition-all duration-300 ease-in bg-[length:0%] px-6 py-4 hover:rounded-full hover:bg-[length:100%] hover:shadow-2xl hover:text-personal-neutralLight dark:text-personal-neutralLight dark:border-personal-neutralLight dark:hover:border-personal-secondary"
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
