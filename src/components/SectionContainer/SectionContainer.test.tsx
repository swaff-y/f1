import { render, screen } from '@testing-library/react';
import { SectionContainer } from './SectionContainer';

test('renders a home link', () => {
  render(<SectionContainer children />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});