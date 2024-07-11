import './meetings.css';
import { MeetingClickResults } from './MeetingClickResults/MeetingClickResults';
import { MeetingFilterForm } from './MeetingFilterForm/MeetingFilterForm';
import { MeetingFilterResultsLoader } from './MeetingFilterResultsLoader/MeetingFilterResultsLoader';
import { MeetingFilterResults } from './MeetingFilterResults/MeetingFilterResults';
import { useLocationParams } from '../../hooks/useLocationParams';

export const Meetings = () => {
  const {
    meeting_key
  } = useLocationParams();

  return (
    <div className='meeting-container'>
      <MeetingFilterForm />
      { !meeting_key &&
        <>
          <MeetingFilterResultsLoader />
          <MeetingFilterResults />
        </>
      }
      { meeting_key && 
        <MeetingClickResults 
          meeting_key={ parseInt(meeting_key) }
        />}
    </div>
  );
};