import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { createStore } from 'redux';
import allReducers from './reducers/All_Reducers';
import { BrowserRouter as Router } from "react-router-dom";

let store = createStore(allReducers);
export const history = createBrowserHistory();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
