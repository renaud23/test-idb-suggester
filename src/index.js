import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <p>Test in CRA app. French communes.</p>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
