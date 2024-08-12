import { render, screen } from '@testing-library/react';
import { FilterResultsLoader } from './FilterResultsLoader';

test('renders a home link', () => {
  render(<FilterResultsLoader filterOptions={[]} />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});