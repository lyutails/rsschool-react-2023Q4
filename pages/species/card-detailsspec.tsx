/* import { describe, it, expect } from 'vitest';
import { CardDetails } from './[card-details]';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../state_management/store';
import { BrowserRouter } from 'react-router-dom';

describe('check what is going on in card', () => {
  it('text content', () => {
    const { container } = render(
      <Provider store={store}>
        <CardDetails />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    expect(container).toBeInstanceOf(Node);
    expect(container).not.toBeNull();
  });
});
 */