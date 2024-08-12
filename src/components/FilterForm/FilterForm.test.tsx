import { render, screen } from '@testing-library/react';
import { FilterForm } from './FilterForm';

test('renders a home link', () => {
  render(<FilterForm 
    filterOptions={[]} 
    setSelection={() => {}}
    setValue={() => {}}
    selection={{} as { label: string, id: string }}
    value=''
    onSubmit={() => {}}
  />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});