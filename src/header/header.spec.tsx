import { describe, it, expect, vi } from 'vitest';
import { Header } from './header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../state_management/store';
import { BrowserRouter } from 'react-router-dom';

describe('check what is going on in header', () => {
  it('header has a button', () => {
    const changePage = vi.fn((data: number) => data);
    render(
      <Provider store={store}>
        <Header changePage={changePage} />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const button = screen.getByRole('button', { name: 'Get Error' });
    expect(button).toBeInTheDocument();
  });
  it('a button text content is cross', () => {
    const changePage = function (data: number) {
      return data;
    };
    render(
      <Provider store={store}>
        <Header changePage={changePage} />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const button = screen.getByText(/Cross/);
    expect(button.textContent).toBe('Cross');
  });
});
