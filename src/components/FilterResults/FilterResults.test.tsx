import { render, screen } from '@testing-library/react';
import { FilterResults } from './FilterResults';

test('renders a home link', () => {
  render(<FilterResults />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});