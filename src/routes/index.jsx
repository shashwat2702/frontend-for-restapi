import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { getApiAccessToken } from '../utils/tokenHelper';
import PageLayout from '../components/PageLayout/PageLayout';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';

const PrivateRoute = (props) => {
  const apiAccessToken = getApiAccessToken();
  return(
    <>
    {apiAccessToken ? (
      <Route path={props.path}>
        <p>Protected Path</p>
      </Route>
    ) : (
      <Redirect to='/login' />
    )}
    </>
  )
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
        <PageLayout><Signup/></PageLayout>
        </Route>
        <Route path="/login">
          <PageLayout><Login/></PageLayout>
        </Route>
        <PrivateRoute to='/protected' />
        <Route>
          <p>Not Found Page</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
