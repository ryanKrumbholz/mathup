import React from "react";
import AuthenticationButton from "../Auth_Button/Auth_Button";
import Signup_Button from "../Signup_Button/Signup_Button";
import { useAuth0 } from "@auth0/auth0-react";
import './auth_nav.sass';

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  let signup = !isAuthenticated ? <Signup_Button /> : <div></div>;
  let challenges = isAuthenticated ? <a href="/topics">Challenges</a> : <div></div>;
  let account= isAuthenticated ? <a href="/account">Account</a> : <div></div>;
  return (
  <div className="navbar-nav ml-auto" class="authnav">
    <a href="/about">About</a>
    {challenges}
    {account}
    <AuthenticationButton />
    {signup}
  </div>
  );
};

export default AuthNav;