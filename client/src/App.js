import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
