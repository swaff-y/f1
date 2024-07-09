import { render, screen } from '@testing-library/react';
import { MeetingClickResults } from './MeetingClickResults';
import { Meeting } from '../../models/Meeting';

test('renders a home link', () => {
  render(<MeetingClickResults data={Meeting.buildMeeting({ circuit_key: 1 })} />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});