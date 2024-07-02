import { useMeeting } from "../../hooks/useMeeting";
import { useMeetings } from "../../hooks/useMeetings";

export const Home = () => {
  const meetings = useMeetings({ year: '2024' });
  const key = meetings.data.getIndex(1)?.meeting_key || 0;
  const meeting = useMeeting({ meeting_key: key });
  return (
    <div>
      <h1>Home</h1>
      <p>{meeting.isSuccess && <>{meeting.data.get('meeting_name')}</>}</p>
    </div>
  );
};