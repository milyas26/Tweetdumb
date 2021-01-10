import React from "react";
import "./SidebarMenu.css";

const SidebarMenu = ({ svg, active, label }) => {
  const className = [];
  if (active) className.push("active");
  return (
    <div className="item home">
      <div className={["icon", className].join(" ")}>{svg}</div>
      <span style={{ color: active && "#1DA1F2" }}>{label}</span>
    </div>
  );
};

export default SidebarMenu;
