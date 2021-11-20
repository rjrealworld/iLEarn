import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, reference, stat }) => {
  // const myStyle = {
  //   background: 'yellow'
  // };
  // console.log(document.querySelector("#status"));
  // if (stat === false) {
  //     document.querySelector("#status").classList.add(myStyle);
  //     console.log("false");
  //   } else {
  //     console.log("true");
  //   }
  return (
    <div className="ContainerInput">
      <input
        className="StyledInput"
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autocomplete="off"
      />
      <div
        className="Status"
        // id="status"
        ref={reference}
        required
      />
    </div>
  );
};

export default Input;
