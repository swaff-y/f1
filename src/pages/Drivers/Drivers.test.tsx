import { render, screen } from '@testing-library/react';
import { Drivers } from './Drivers';

test('renders a home link', () => {
  render(<Drivers />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});