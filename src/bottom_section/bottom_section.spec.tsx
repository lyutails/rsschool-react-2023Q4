import { describe, it, expect } from 'vitest';
import { BottomSection } from './bottom_section';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('check what is going on in bottom section', () => {
  it('bottom section does not contain button', () => {
    render(<BottomSection />);
    const button = screen.queryByText('submit');
    expect(button).not.toBeInTheDocument();
  });
  it('bottom section contains text', () => {
    render(<BottomSection />);
    const text = screen.getByTestId('detail');
    expect(text).toBeInTheDocument();
  });
});
