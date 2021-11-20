import React from "react";
import SignUp from "./signUp/SignUp";
import SignIn from "./signIn/SignIn";
import AuthProvider from "./signUp/contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      {/* <AuthProvider> */}
      <Switch>
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/" component={SignIn} />
      </Switch>
      {/* </AuthProvider> */}
    </Router>
  );
};

export default App;
