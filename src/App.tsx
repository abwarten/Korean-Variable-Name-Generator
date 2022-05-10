import React from 'react';

import './App.css';
import { Tree } from './components/Tree';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Tree />
    </QueryClientProvider>
  );
};

export { App };
