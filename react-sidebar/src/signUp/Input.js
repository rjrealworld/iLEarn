import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, ref, setFunc }) => {
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

  function handleChange(e) {
    setFunc(e.target.value);
  }

  return (
    <div className="ContainerInput">
      <input
        className="StyledInput"
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        value={ref}
        required
        onChange={handleChange}
      />
      <div
        className="Status"
        // id="status"
        // ref={reference}
        required
      />
    </div>
  );
};

export default Input;
