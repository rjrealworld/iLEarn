import React, { useRef } from "react";
import logo from "../assets/logo.svg";
import Input from "./Input";
import "./Sidebar.css";

const Sidebar = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (

    <div className="Container">
      <div className="LogoWrapper">
        <img src={logo} alt="" />
        <h3>
          i <span> LE </span>arn{" "}
        </h3>{" "}
      </div>{" "}
      <form className="Form">
        <h3> Sign Up </h3> <Input placeholder="Full Name" ref={nameRef} />{" "}
        <Input type="email" id="email" placeholder="Email" ref={emailRef} />{" "}
        <Input type="password" placeholder="Password" ref={passwordRef} />{" "}
        <Input
          type="password"
          placeholder="Confrim Password"
          ref={confirmPasswordRef}
        />{" "}
        <button> Sign Up </button>{" "}
      </form>{" "}
      <div>
        <h4>
          Already have an account ? <span> Sign In </span>{" "}
        </h4>{" "}
      </div>{" "}
      </div>
  );
};
export default Sidebar;
