import React, { useState } from "react";
import { Sun, Moon } from "react-feather";

const ToggleTheme = (props) => {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <button
      onClick={props.onClick}
      className="w-6 h-6 text-personal-primaryLight transition-all duration-300 ease-out hover:text-personal-primary dark:hover:text-personal-secondaryDark dark:text-personal-secondaryLight"
    >
      {darkToggle ? (
        <Moon className="w-full h-full" />
      ) : (
        <Sun className="w-full h-full" />
      )}
    </button>
  );
};

export default ToggleTheme;
