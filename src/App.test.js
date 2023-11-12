import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders select random survivor button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Select Random Survivor/i);
  expect(buttonElement).toBeInTheDocument();
});
