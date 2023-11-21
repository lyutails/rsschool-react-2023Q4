import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import ErrorBoundary from './error_boundary/error_boundary';
import { App } from './app/app';
import { Provider } from 'react-redux';
import { store } from './state_management/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
