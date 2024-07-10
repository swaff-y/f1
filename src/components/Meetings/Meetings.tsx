import './meetings.css';
import { MeetingClickResults } from './MeetingClickResults/MeetingClickResults';
import { MeetingFilterForm } from './MeetingFilterForm/MeetingFilterForm';
import { MeetingFilterResultsLoader } from './MeetingFilterResultsLoader/MeetingFilterResultsLoader';
import { MeetingFilterResults } from './MeetingFilterResults/MeetingFilterResults';
import { useLocationParams } from '../../hooks/useLocationParams';

export const MEETING_FILTER_OPTIONS = [
  {
    id: 'year',
    label: 'Year',
  },
  {
    id: 'meeting_name',
    label: 'GP Name',
  },
  {
    id: 'meeting_key',
    label: 'GP Key',
  },
  {
    id: 'country_name',
    label: 'Country',
  },
  {
    id: 'country_key',
    label: 'Country Key'
  },
  {
    id: 'circuit_name',
    label: 'Circuit Name'
  },
  {
    id: 'circuit_key',
    label: 'Circuit Key'
  }
];

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