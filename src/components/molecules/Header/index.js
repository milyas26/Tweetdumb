import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ label, isIcon }) => {
  const history = useHistory();
  return (
    <div className="header-wrapper">
      <div
        className="icon"
        style={{ display: isIcon ? "" : "none", cursor: "pointer" }}
        onClick={() => history.goBack()}
      >
        <svg viewBox="0 0 24 24" style={{ paddingTop: 4 }}>
          <g>
            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
          </g>
        </svg>
      </div>
      <div className="header">
        <span>{label}</span>
        <p>Tweetdumb | Twitter Clone</p>
      </div>
    </div>
  );
};

export default Header;
