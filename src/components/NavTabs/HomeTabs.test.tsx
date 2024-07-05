import { render, screen } from '@testing-library/react';
import { NavTabs } from './NavTabs';

test('renders a home link', () => {
  render(<NavTabs />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});