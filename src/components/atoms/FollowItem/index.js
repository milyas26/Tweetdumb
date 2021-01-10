import React from "react";
import Button from "../Button";
import "./FollowItem.css";

const FollowItem = ({ img, name, username }) => {
  return (
    <div className="trend-item">
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
    </div>
  );
};

export default FollowItem;
