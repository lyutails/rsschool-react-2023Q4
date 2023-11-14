/* import { beforeEach, describe, expect, test, vi, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from './header';

describe('testing header component', () => {
  const inputTestId = 'lalala';
  const inputValue = 'yo';
  const onChangeInput = vi.fn();
  let input: HTMLInputElement;
  beforeEach(() => {
    render(
      <Header
        data-testid={inputTestId}
        value={inputValue}
        onChange={onChangeInput}
      ></Header>
    );
    input = screen.getByTestId(inputTestId);
  });

  test('check default input value', () => {
    expect(input).toBe(inputValue);
  });

  it('should empty local storage', () => {
    render(<Header />);
    const crossButton = screen.getByText('cross');
    fireEvent.click(crossButton);
    expect(localStorage).toContain('');
  });
});
 */
