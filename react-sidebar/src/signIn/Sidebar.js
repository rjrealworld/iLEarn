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
            i<span>LE</span>arn
          </h3>
        </div>
        <form className="Form">
          <h3> Sign In </h3>{" "}
          {error && <p className="error">{error}</p>}
          <div className="ContainerInput">
            <input
              className="StyledInput"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            
          </div>
          <button onClick={handleSubmit}> Sign In </button>
          <button id="google-btn" onClick={handleGoogleSignIn}>
            Sign In with{" "}
            <img
              src="https://img.icons8.com/fluency/50/000000/google-logo.png"
              className="google-icon"
              alt="google-icon"
            />
          </button>
        </form>
        <div className="footer">
          <h4>
            Don't have an account?
            <Link id="form-link" to="/signUp">
              <span>Sign Up</span>
            </Link>
          </h4>
        </div>
      </div>
    );
};

export default Sidebar;