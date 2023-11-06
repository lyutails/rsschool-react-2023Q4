import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeroPage } from './hero_page/hero_page';
import ErrorPage from './error-page/error-page';
import { CardDetails } from './card-details/card-details';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} errorElement={<ErrorPage />}>
          <Route path="species/:id" element={<CardDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
