import React from "react";
import logo from "../assets/logo.svg";
import Input from "./Input";
import "../signUp/Sidebar.css";

const Sidebar = () => {
    return (
      <div className="Container">
        <div className="LogoWrapper">
          <img src={logo} alt="" />
          <h3>
            i <span> LE </span>arn
          </h3>
        </div>
        <form className="Form">
          <h3> Sign In </h3> <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <button> Sign In </button>{" "}
        </form>{" "}
        <div>
          <h4>
            Don 't have an account? <span>Sign Up</span>{" "}
          </h4>{" "}
        </div>{" "}
      </div>
    );
};

export default Sidebar;