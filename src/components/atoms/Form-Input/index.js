import React from "react";
import "./FormInput.css";

const FormInput = ({ label, type }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input type={type} onFocus={false} />
    </div>
  );
};

export default FormInput;
