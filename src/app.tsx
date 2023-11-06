import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { HeroPage } from './hero_page/hero_page';
import ErrorPage from './error-page/error-page';
import { CardDetails } from './card-details/card-details';

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HeroPage />} errorElement={<ErrorPage />}>
        <Route path="/:params/species/:id" element={<CardDetails />}></Route>
      </Route>
      <Route
        path="/:params"
        element={<HeroPage />}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
