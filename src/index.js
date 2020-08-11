import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./pages/App";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/index.html" component={Home} />
      <Route path="/gram" component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
