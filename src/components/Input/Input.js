import React from "react";
import "./Input.scss";

const Input = ({ placeholder }) => {
  return (
    <div className="input-control mb-25">
      <input
        className="contact-form-input input-effect px-20 py-05 "
        type="text"
        placeholder={placeholder.toUpperCase()}
      />
      <span className="input-focus-border">
        <i></i>
      </span>
    </div>
  );
};

export default Input;
