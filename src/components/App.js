import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "../pages/Home";
import Starred from "../pages/Starred";

function App() {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>Not found: 404 page</Route>
      </Switch>
    </div>
  );
}

export default App;
