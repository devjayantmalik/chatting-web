import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import LandingPage from "../pages/Auth/LandingPage";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import PageNotFound from "../pages/Errors/404";

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AuthRouter;
