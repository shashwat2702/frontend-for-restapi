import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../components/Homepage/HomePage';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
        <HomePage><Signup/></HomePage>
        </Route>
        <Route path="/login">
          <HomePage><Login/></HomePage>
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
