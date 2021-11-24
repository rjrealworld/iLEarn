import React, { useRef, useState } from "react";
import {Alert} from 'react-bootstrap';
import logo from "../assets/logo.svg";
// import Input from "./Input";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const {signUp, currentUser, updateProf, history} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      history.push('/signup');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signUp(email, password);
      updateProf(name);
      console.log("Sign up successful");
      history.push("/dashboard");
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
          i<span>LE</span>arn
        </h3>
      </div>
      <form className="Form" onSubmit={handleSubmit}>
        <h3> Sign Up </h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="ContainerInput">
          <input
            className="StyledInput"
            placeholder="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div
            className="Status"
            // id="status"
            // ref={reference}
            required
          />
        </div>
        <div className="ContainerInput">
          <input
            className="StyledInput"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className="Status"
            // id="status"
            // ref={reference}
            required
          />
        </div>
        <div className="ContainerInput">
          <input
            className="StyledInput"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="Status"
            // id="status"
            // ref={reference}
            required
          />
        </div>
        <div className="ContainerInput">
          <input
            className="StyledInput"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            className="Status"
            // id="status"
            // ref={reference}
            required
          />
        </div>
        <button type="submit"> Sign Up </button>
      </form>
      <div>
        <h4>
          Already have an account ?
          <Link id="form-link" to="/">
            <span>Sign In</span>
          </Link>
        </h4>
      </div>
    </div>
  );
};
export default Sidebar;