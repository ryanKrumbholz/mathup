import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.sass';
import Home from './components/Home/Home';
import ProtectedRoute from "./auth/protected-route";
import Challenge from './components/Challenge/Challenge';
import Navbar from './components/Navbar/Navbar';
import Account from './components/Account/Account';
import Topics from './components/Topics/Topics';
import auth0  from 'auth0-js';


function App() {
  // let webAuth = new auth0.WebAuth({
  //   domain: process.env.REACT_APP_AUTH0_DOMAIN,
  //   clientID: process.env.REACT_APP_AUTH0_CLIENT_ID
  // });

  // webAuth.checkSession({
  //   nonce: '1234',
  // }, function (err, authResult) {
  //     console.log(err, authResult)
  // });
  return (
    <div>
    <Challenge />
    <Topics />

    <Navbar />
    <Router>
        <Switch>
        <ProtectedRoute path="/account" component={Account} />
        <ProtectedRoute path="/challenge" component={Challenge} />
          <ProtectedRoute path="/topics" component={Topics} />
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
