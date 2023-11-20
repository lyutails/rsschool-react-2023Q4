import { describe, it, expect } from 'vitest';
import Spinner from './spinner';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('check hamster', () => {
  it('check if the hamster consists of divs', () => {
    render(<Spinner />);
    const hamster = screen.getByRole('img');
    expect(hamster).toBeInTheDocument();
  });
});
