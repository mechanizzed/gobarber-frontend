import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

// Global styles
import GlobalStyles from './assets/styles/globals';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
