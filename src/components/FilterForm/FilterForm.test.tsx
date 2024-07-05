import { render, screen } from '@testing-library/react';
import { FilterForm } from './FilterForm';

test('renders a home link', () => {
  render(<FilterForm filterOptions={[]} />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});