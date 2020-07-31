import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import PageNotFound from "../pages/Errors/404";
import Dashboard from "../pages/Site/Dashboard";

const SiteRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default SiteRouter;
