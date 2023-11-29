import { describe, it, expect } from 'vitest';
import { Footer } from './footer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('check what is going on in footer', () => {
  it('footer has links', () => {
    render(<Footer />);
    const rsschoolLink = screen.getByRole('link', { name: '' });
    expect(rsschoolLink).toHaveAttribute('href', 'https://rs.school/');
  });
  it('footer has author name', () => {
    render(<Footer />);
    const authorLink = screen.getByText(/lyutails/);
    expect(authorLink).toBeVisible();
  });
});
