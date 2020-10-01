import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './service/history';

import { AuthProvider } from './Context/AuthContext';

import GlobalStyle from './styles/global';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
