import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.png";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./App.css";
import AuthProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div className="ContainerApp">
      <div className="AppWrapper">
        <Main />
        <Sidebar />
      </div>
    </div>
    </AuthProvider>
  );
};

export default App;
