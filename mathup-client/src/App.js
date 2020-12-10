import React from 'react';
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
import Topics from './components/Topics/Topics'

function App() {
  return (
    <div>
    <Navbar />
    <Router>
        <Switch>
        <ProtectedRoute path="/account" component={Account} />
        <ProtectedRoute path="/challenge" component={Challenge} />
          <ProtectedRoute path="/topics" component={Topics} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
