import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => {
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
      },
    })}
    {...args}
  />
);

export default ProtectedRoute;