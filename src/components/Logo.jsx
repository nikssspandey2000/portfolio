import React from "react";
import myLogo from "../assets/images/myLogo.png";
import logonobg from "../assets/images/logo-no-background.png";

function Logo({ width = "150px", className = "", ...props }) {
  return (
    <img
      src={logonobg}
      alt="myLogo"
      className={`rounded object-cover ${className}`}
      width={width}
      {...props}
    />
  );
}

export default Logo;
