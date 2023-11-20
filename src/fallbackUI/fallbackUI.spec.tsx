import { describe, it, expect } from 'vitest';
import { FallbackUI } from './fallbackUI';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('check what is going on in fallbackUI', () => {
  it('fallbackUI has text', () => {
    render(<FallbackUI />);
    const text = screen.getByText('Oh no! Do something!');
    expect(text.textContent).toBe('Oh no! Do something!');
  });
});
