import { render, screen } from '@testing-library/react';
import App from './App';

test('renders select random survivor button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Generate Random Survivor Build/i);
  expect(buttonElement).toBeInTheDocument();
});
