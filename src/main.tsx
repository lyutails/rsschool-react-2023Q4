import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import ErrorBoundary from './error_boundary';
import { App } from './app';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    /* loader: ({ params: string }) => {
      return rootLoader(params);
    }, */
    /* children: [
      {
        path: 'species/:id',
        element: <CardDetails species={species} />,
      },
    ], */
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
