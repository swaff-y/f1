import { render, screen } from '@testing-library/react';
import { FilterForm } from './FilterForm';

test('renders a home link', () => {
  render(<FilterForm 
    filterOptions={[]} 
    setSelection={() => {}}
    selection={{} as { label: string, id: string }}
  />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});