import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "../pages/Home";
import Starred from "../pages/Starred";
import Show from "./Show";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path="/show/:id">
        <Show />
      </Route>

      <Route>Not found: 404 page</Route>
    </Switch>
  );
}

export default App;
