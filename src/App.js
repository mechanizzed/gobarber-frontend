import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// react-toastify
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import history from './services/history';
import Routes from './routes';

// Global styles
import GlobalStyles from './assets/styles/globals';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
