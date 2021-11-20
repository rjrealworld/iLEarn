import React, { useReducer, useRef, useState } from "react";
import {Alert} from 'react-bootstrap';
import logo from "../assets/logo.svg";
import Input from "./Input";
import "./Sidebar.css";
import AuthProvider, { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const emailStatus = useRef(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  // const {signUp} = useAuth();
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);


  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   if (passwordRef.current.value !== confirmPasswordRef.current.value) {
  //     return setError('Passwords do not match');
  //   }
  //   try {
  //     setError('');
  //     setLoading(true);
  //     await signUp(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     setError('Failed to create an account');
  //   }
  //   setLoading(false);
  // }

  return (
    // <AuthProvider>
      <div className="Container">
      <div className="LogoWrapper">
        <img src={logo} alt="" />
        <h3>
          i <span> LE </span>arn
        </h3>
      </div>
      {/* <form className="Form" onSubmit={handleSubmit}> */}
      <form className="Form">
        <h3> Sign Up </h3> 
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <Input placeholder="Full Name" ref={nameRef} stat={false}/>
        <Input type="email" id="email" placeholder="Email" ref={emailRef} stat={emailStatus}/>
        <Input type="password" placeholder="Password" ref={passwordRef} stat={false}/>
        <Input
          type="password"
          placeholder="Confrim Password"
          ref={confirmPasswordRef}
          stat={false}
        />
        {/* <button disabled={loading}> Sign Up </button> */}
        <button> Sign Up </button>
      </form>
      <div>
        <h4>
          Already have an account ? <Link to='/signIn'><span>Sign In</span></Link>
        </h4>
      </div>
    </div>
    // </AuthProvider>
  );
};
export default Sidebar;