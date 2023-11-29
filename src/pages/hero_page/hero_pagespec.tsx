/* import { describe, it, expect } from 'vitest';
import { HeroPage } from './hero_page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../state_management/store';
import { BrowserRouter } from 'react-router-dom';

describe('check what is going on in hero', () => {
  it('what is in text', async () => {
    await render(
      <Provider store={store}>
        <HeroPage />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const text = screen.getByText(
      'Current loading state is saved to the store: true' ||
        'Current loading state is saved to the store: false'
    );
    expect(text.textContent).toBe(
      'Current loading state is saved to the store: true' ||
        'Current loading state is saved to the store: false'
    );
  });
});
 */