import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import ErrorBoundary from './error_boundary';
import { App } from './app';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage></ErrorPage>,
//     /* loader: */
//     children: [
//       {
//         path: 'species/:id',
//         element: <CardDetails />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ErrorBoundary>
//       <RouterProvider router={router} />
//     </ErrorBoundary>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
