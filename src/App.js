import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <main>
          <Route exact path="/">
            <Users />
          </Route>
          <Route exact path="/places/new">
            Places Works!
          </Route>
          <Redirect to="/" />
        </main>
      </Switch>
    </Router>
  );
}

export default App;
