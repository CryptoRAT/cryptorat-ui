import { render, screen } from '@testing-library/react';
import App from './App';

test('renders select random survivor button', () => {
  render(<App />);
  // const survivorButtonElement = screen.getByText(/Survivor Build/i);
  // const killerButtonElement = screen.getByText(/Killer Build/i);
  // expect(survivorButtonElement).toBeInTheDocument();
  // expect(killerButtonElement).toBeInTheDocument();
});
