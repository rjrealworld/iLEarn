import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./signUp/SignUp";
import SignIn from "./signIn/SignIn";
import index from "./DashBoard/Sidebar/index";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/dashboard" component={index} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
