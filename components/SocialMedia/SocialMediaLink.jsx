import React from "react";
import Link from "next/link";

const SocialMediaLink = (props) => {
  return (
    <li>
      <Link href={props.src}>
        <a className="w-6 h-6 text-personal-iconDark transition-all duration-300 ease-out hover:text-personal-iconHoverDark  dark:text-personal-iconLight dark:hover:text-personal-iconHoverLight">
          {props.children}
        </a>
      </Link>
    </li>
  );
};

export default SocialMediaLink;
