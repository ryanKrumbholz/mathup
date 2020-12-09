import React from "react";

import LoginButton from "../Login_Button/Login_Button";
import LogoutButton from "../Logout_Button/Logout_Button";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;