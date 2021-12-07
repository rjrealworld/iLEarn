import React from "react";
import Sidebar from "./Sidebar";
import "./SignUp.css";


const SignUp = () => {
  return (
    <div className="ContainerApp">
      <div className="AppWrapper">
        <div className="ContainerBg">
          <h1>
            Join The <br />
            Community
          </h1>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default SignUp;
