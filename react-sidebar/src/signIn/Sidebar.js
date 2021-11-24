import React, {useState} from "react";
import logo from "../assets/logo.svg";
import Input from "./Input";
import "../signUp/Sidebar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {signIn, googleSignIn, currentUser, history} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // console.log("Inside handleSubmit", currentUser);

    try {
      setError('');
      setLoading(true);
      await signIn(email, password);
      history.push("/dashboard");
      console.log("Sign in successful", currentUser);
    } catch {
      setError('Failed to Login');
    }
    setLoading(false);
  }

  async function handleGoogleSignIn(e) {
    e.preventDefault();

    console.log("Inside handleGoogleSignIn", currentUser);

    try {
      setError('');
      setLoading(true);
      await googleSignIn();
      console.log("Google Sign in successful");
      history.push("/dashboard");
    } catch {
      setError('Failed to Login with Google');
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
          <h3> Sign In </h3>{" "}
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
          <button onClick={handleSubmit}> Sign In </button>
          <button className="google-btn" onClick={handleGoogleSignIn}>
            {" "}
            Sign In With Google{" "}
          </button>
        </form>
        <div>
          <h4>
            Don 't have an account?{" "}
            <Link to="/signUp">
              <span>Sign Up</span>
            </Link>
          </h4>
        </div>
      </div>
    );
};

export default Sidebar;