import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/atoms/Button";
import FormInput from "../../components/atoms/Form-Input";
import Gap from "../../components/atoms/Gap";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  return (
    <div className="login">
      <div className="form-login">
        <div className="logo">
          <i className="far fa-comments" style={{ fontSize: 46 }}></i>
        </div>
        <h3 className="login-tag">Login to Tweetdumb</h3>
        <Gap height={20} />
        <div className="form">
          <FormInput label="Phone, email, or username" />
          <Gap height={20} />
          <FormInput label="Password" type="password" />
          <Gap height={20} />
          <Button
            label="Login"
            padding={15}
            onClick={() => history.push("/home")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
