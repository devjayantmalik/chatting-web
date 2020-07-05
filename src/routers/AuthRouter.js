import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import LandingPage from "../pages/Auth/LandingPage";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRouter;
