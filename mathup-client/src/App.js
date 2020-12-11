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
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading/Loading';
import About from './components/About/About';

function App() {
  const isLoading = useAuth0().isLoading;
  if (isLoading) {
    return(
      <Loading />
    );
  }
  else {
    return (
      <div>
      <Navbar />
      <Router>
          <Switch>
          <ProtectedRoute path="/account" component={Account} />
          <ProtectedRoute path="/challenge" component={Challenge} />
            <ProtectedRoute path="/topics" component={Topics} />
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </div>
    );
  }
  
}

export default App;
