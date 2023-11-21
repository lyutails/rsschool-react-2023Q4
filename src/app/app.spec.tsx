import { describe, it } from 'vitest';
import { App } from './app';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('testing App', () => {
  it('check if app is up and running', () => {
    render(<App />);
    screen.debug();
  });
});
