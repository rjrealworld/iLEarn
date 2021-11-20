import React, { useRef, useState } from "react";
import {Alert} from 'react-bootstrap';
import logo from "../assets/logo.svg";
import Input from "./Input";
import "./Sidebar.css";
import { useAuth } from "./contexts/AuthContext";

const Sidebar = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const {signUp} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }
  return (
    <div className="Container">
      <div className="LogoWrapper">
        <img src={logo} alt="" />
        <h3>
          i <span> LE </span>arn
        </h3>
      </div>
      <form className="Form" onSubmit={handleSubmit}>
        <h3> Sign Up </h3> 
        {error && <Alert variant="danger">{error}</Alert>}
        <Input placeholder="Full Name" ref={nameRef} />
        <Input type="email" id="email" placeholder="Email" ref={emailRef} />
        <Input type="password" placeholder="Password" ref={passwordRef} />
        <Input
          type="password"
          placeholder="Confrim Password"
          ref={confirmPasswordRef}
        />
        <button disabled={loading}> Sign Up </button>
      </form>
      <div>
        <h4>
          Already have an account ? <span> Sign In </span>
        </h4>
      </div>
    </div>
  );
};
export default Sidebar;
