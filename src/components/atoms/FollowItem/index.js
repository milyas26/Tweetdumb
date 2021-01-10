import React from "react";
import Button from "../Button";
import "./FollowItem.css";

const FollowItem = ({ img, name, username, isFull }) => {
  const className = [];
  if (isFull) className.push("full");

  return (
    <div className={["trend-item", className].join(" ")}>
      <div className="group">
        <div className="follow-item">
          <img src={img} alt="" />
          <div className="follow-username">
            <p>{name}</p>
            <span>{`@${username}`}</span>
          </div>
        </div>
        <Button label="Follow" isFollow />
      </div>
      <div className="group2" style={{ display: isFull ? "" : "none" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          dolorem.
        </p>
      </div>
    </div>
  );
};

export default FollowItem;
