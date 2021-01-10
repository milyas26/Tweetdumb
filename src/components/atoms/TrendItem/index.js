import React from "react";
import "./TrendItem.css";

const TrendItem = ({ label }) => {
  return (
    <div className="trend-item">
      <span>Populer di Indonesia</span>
      <p className="hashtag">{label}</p>
      <span>150rb Tweets</span>
    </div>
  );
};

export default TrendItem;
