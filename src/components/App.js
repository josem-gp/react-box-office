import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav";

function App() {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact={true} path="/">
          This is home page
        </Route>

        <Route exact path="/starred">
          This is starred
        </Route>

        <Route>Not found: 404 page</Route>
      </Switch>
    </div>
  );
}

export default App;
