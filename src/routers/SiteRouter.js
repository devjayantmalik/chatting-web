import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Site/Home";

const SiteRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default SiteRouter;
