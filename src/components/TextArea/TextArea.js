import React from "react";
import "./TextArea.scss";

const TextArea = ({ placeholder }) => {
  return (
    <div className="text-area-control">
      <textarea
        className="contact-form-text-area input-effect px-20 py-15 mt-30"
        type="text"
        placeholder={placeholder.toUpperCase()}
        rows={5}
      />
      <span className="input-focus-border">
        <i></i>
      </span>
    </div>
  );
};

export default TextArea;
