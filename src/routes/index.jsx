import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/public">
          <p>Public Page</p>
        </Route>
        <Route path="/login">
          <p>Login Page</p>
        </Route>
        <Route path="/protected">
          <p>Protected Path</p>
        </Route>
        <Route>
          <p>Not Found Page</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
