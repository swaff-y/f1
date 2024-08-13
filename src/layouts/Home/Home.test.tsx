import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('renders learn react link', () => {
  render(<Home><div></div></Home>);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});