import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import ErrorBoundary from './error_boundary/error_boundary';
import { Provider } from 'react-redux';
import { store } from './state_management/store';
import HomePage from '../pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
