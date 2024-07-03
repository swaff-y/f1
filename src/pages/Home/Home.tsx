import { useDriver } from "../../hooks/useDriver";
import { useDrivers } from "../../hooks/useDrivers";
import { useMeeting } from "../../hooks/useMeeting";
import { useMeetings } from "../../hooks/useMeetings";
import { useSession } from "../../hooks/useSession";
import { useSessions } from "../../hooks/useSessions";

export const Home = () => {
  const { data: meetings } = useMeetings({ year: '2024' });

  
  const meet = meetings.getIndex(1);
  const { data: meeting, isSuccess: meetingSuccess } = useMeeting({ meeting_key: meet?.meeting_key });
  const drivers = useDrivers({ 
    meeting_key: 1239, 
    session_key: 9540
  });
  const { data: driver, isSuccess: driverSuccess } = useDriver({
    meeting_key: 1239,
    session_key: 9540,
    driver_number: 1
  });
  const { data: sessions, isSuccess: sessionSuccess } = useSessions({ meeting_key: 1239 });
  const { data: session } = useSession({ meeting_key: 1239, session_key: 9540 });
  
  return (
    <div>
      <h1>Home</h1>
      <p>{meetingSuccess && <>{meeting.meeting_name}</>}</p>
      <p>{driverSuccess && <>{driver.full_name}</>}</p>
      <p>{sessionSuccess && <>{session.circuit_short_name}</>}</p>
    </div>
  );
};