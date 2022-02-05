import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header1', () => {
  render(<App />);
  const headElement = screen.getByText("Sample React Application");
  expect(headElement).toBeInTheDocument();
});
