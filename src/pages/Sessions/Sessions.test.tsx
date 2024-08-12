import { render, screen } from '@testing-library/react';
import { Sessions } from './Sessions';

test('renders a home link', () => {
  render(<Sessions />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});