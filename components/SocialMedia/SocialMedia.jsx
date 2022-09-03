import Link from "next/link";
import React from "react";
import { Facebook, Twitter, Instagram } from "react-feather";
import SocialMediaLink from "./SocialMediaLink";

const SocialMedia = (props) => {
  return (
    <ul className={props.className}>
      <SocialMediaLink src="#!">
        <Twitter />
      </SocialMediaLink>
      <SocialMediaLink src="#!">
        <Instagram />
      </SocialMediaLink>
      <SocialMediaLink src="#!">
        <Facebook />
      </SocialMediaLink>
    </ul>
  );
};

export default SocialMedia;
