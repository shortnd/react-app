import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archived";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Featured from "./pages/Featured";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="/archives" component={Archives}></Route>
      <Route path="/settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
