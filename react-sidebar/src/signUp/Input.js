import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, reference }) => {
  return (
    <div className="ContainerInput">
      <input
        className="StyledInput"
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autocomplete="off"
      />
      <div className="Status" ref={reference} required />
    </div>
  );
};

export default Input;
