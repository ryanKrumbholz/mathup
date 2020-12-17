import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from '../components/Loading/Loading';
import './protected-route.sass';

const ProtectedRoute = ({ component, ...args }) => (

  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading id="spinner"/>,
    })}
    {...args}
  />
);

export default ProtectedRoute;