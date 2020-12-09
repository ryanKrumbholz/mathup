import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
