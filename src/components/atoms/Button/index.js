import React from "react";
import "./Button.css";

const Button = ({ label, secondary, onClick, padding, isFollow }) => {
  const className = [];
  if (secondary) className.push("btn-secondary");
  if (isFollow) className.push("btn-follow");

  return (
    <div
      style={{ padding: padding }}
      className={["button", className].join(" ")}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Button;
