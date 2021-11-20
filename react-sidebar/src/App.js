import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./signUp/SignUp";
import SignIn from "./signIn/SignIn";
import Dashboard from "./DashBoard/Dashboard";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
