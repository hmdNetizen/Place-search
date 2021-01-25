import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/user/new">
          <div>User Works!</div>
        </Route>
        <Redirect path="/" />
      </Switch>
    </Router>
  );
}

export default App;
