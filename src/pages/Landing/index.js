import React from "react";
import "./Landing.css";
import Gap from "../../components/atoms/Gap";
import Button from "../../components/atoms/Button";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  return (
    <div className="landing">
      <div className="form-landing">
        <div className="logo">
          <i className="far fa-comments" style={{ fontSize: 50 }}></i>
        </div>
        <h2 className="tagline">See what's happening in the world right now</h2>
        <p className="text">Join Tweetdumb Today.</p>
        <Button label="Sign Up" />
        <Gap height={15} />
        <Button
          label="Login"
          secondary
          onClick={() => history.push("/login")}
        />
      </div>
    </div>
  );
};

export default Landing;
