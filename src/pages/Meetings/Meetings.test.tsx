import { render, screen } from '@testing-library/react';
import { Meetings } from './Meetings';

test('renders a home link', () => {
  render(<Meetings />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});