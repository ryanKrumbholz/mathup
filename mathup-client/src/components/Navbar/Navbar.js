import React from "react";

import AuthNav from "../Auth_Nav/Auth_Nav";
import './navbar.sass';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <a href="/" id="homelink">Home</a>
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;