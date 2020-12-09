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

function App() {
  return (
    <div>
    <Navbar />
    {/* // <Challenge /> */}

    <Router>
        <Switch>
        {/* <ProtectedRoute path="/account" component={Account} /> */}
        <ProtectedRoute path="/challenge" component={Challenge} />
          {/* <ProtectedRoute path="/topic" component={Topic} /> */}
          <Route path="/login">
            {/* <Login /> */}
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
