import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import AuthProvider from "./contexts/AuthContext";

const SignUp = () => {
  return (
    // <AuthProvider>
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
    // </AuthProvider>
  );
};

export default SignUp;
