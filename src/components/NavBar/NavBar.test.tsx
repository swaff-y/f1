import { render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';

test('renders a home link', () => {
  render(<NavBar selected="home"/>);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});