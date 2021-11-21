import React, {useRef, useState} from "react";
import logo from "../assets/logo.svg";
import Input from "./Input";
import "../signUp/Sidebar.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {signIn} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Inside handleSubmit");

    try {
      setError('');
      setLoading(true);
      await signIn(emailRef.current.value, passwordRef.current.value);
      console.log("Sign in successful");
      history.push("/");
    } catch {
      setError('Failed to Login');
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
        <form className="Form">
          <h3> Sign In </h3> <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <button onClick={handleSubmit}> Sign In </button>
        </form>
        <div>
          <h4>
          Don 't have an account? <Link to='/signUp'><span>Sign Up</span></Link>
          </h4>
        </div>
      </div>
    );
};

export default Sidebar;