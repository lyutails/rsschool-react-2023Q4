import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import ErrorBoundary from './error_boundary';
import { App } from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
