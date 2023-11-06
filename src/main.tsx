import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import ErrorBoundary from './error_boundary';
import { App } from './app';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page/error-page';
import { CardDetails } from './card-details/card-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    /* loader: */
    children: [
      {
        path: 'species/:id',
        element: <CardDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
