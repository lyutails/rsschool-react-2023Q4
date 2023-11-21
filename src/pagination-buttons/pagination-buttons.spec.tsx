import { describe, it, expect, vi } from 'vitest';
import { PaginationButtons } from './pagination-buttons';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../state_management/store';
import { BrowserRouter } from 'react-router-dom';

describe('check what is going on in pagination', () => {
  it('pagination has a button', () => {
    const changePage = vi.fn((data: number) => data);
    render(
      <Provider store={store}>
        <PaginationButtons
          changePage={changePage}
          totalCount={1}
          search={''}
          page={1}
        />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const button = screen.getByRole('button', { name: 'previous' });
    expect(button).toBeInTheDocument();
  });
  it('pagination has a button', () => {
    const changePage = vi.fn((data: number) => data);
    render(
      <Provider store={store}>
        <PaginationButtons
          changePage={changePage}
          totalCount={1}
          search={''}
          page={1}
        />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const button = screen.getByRole('button', { name: 'next' });
    expect(button).toBeInTheDocument();
  });
  it('pagination has a button', () => {
    const changePage = vi.fn((data: number) => data);
    render(
      <Provider store={store}>
        <PaginationButtons
          changePage={changePage}
          totalCount={1}
          search={''}
          page={1}
        />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    fireEvent.click(screen.getByRole('button', { name: 'next' }));
    expect(screen.getByRole('button', { name: 'next' }).innerHTML).toBe('next');
    expect(screen.queryByText('lalala')).toBeNull();
  });
});
