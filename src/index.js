import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import "./assets/css/bulma.min.css";
import "./assets/js/header-menu.js";
import "./assets/css/custom.css";

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

// import * as serviceWorker from "./serviceWorker";
// serviceWorker.unregister();
