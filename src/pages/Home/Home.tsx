import { useDrivers } from "../../hooks/useDrivers";
import { useMeeting } from "../../hooks/useMeeting";
import { useMeetings } from "../../hooks/useMeetings";

export const Home = () => {
  const meetings = useMeetings({ year: '2024' });
  const meet = meetings.data.getIndex(1);
  const meeting = useMeeting({ meeting_key: meet?.meeting_key });
  const drivers = useDrivers({ 
    meeting_key: 1239, 
    session_key: 9540
  });
  
  console.log('zebra', drivers)
  return (
    <div>
      <h1>Home</h1>
      <p>{meeting.isSuccess && <>{meeting.data.get('meeting_name')}</>}</p>
    </div>
  );
};