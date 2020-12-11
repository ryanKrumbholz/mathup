import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { createStore } from 'redux';
import allReducers from './reducers/All_Reducers';
import { BrowserRouter as Router } from "react-router-dom";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, allReducers);
let store = createStore(persistedReducer);
let persistor = persistStore(store);
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Auth0ProviderWithHistory>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
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
