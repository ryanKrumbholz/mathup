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

function App() {
  return (
    <Router>
        <Switch>
        {/* <ProtectedRoute path="/account" component={Account} /> */}
        {/* <ProtectedRoute path="/challenge" component={Challenge} /> */}
          <Route path="/login">
            {/* <Login /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
