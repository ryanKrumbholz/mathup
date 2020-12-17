import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './account.sass'

const Account = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div id="account">
        <h2>Hello {user.name}, this page doesn't really do much!</h2>
      </div>
    )
  )
}

export default Account;