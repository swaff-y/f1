import { render, screen } from '@testing-library/react';
import { FilterResults } from './FilterResults';

test('renders a home link', () => {
  render(<FilterResults selection={ { label: '', id: '' } } />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});