import './sessions.css';
import { SessionFilterForm } from './SessionFilterForm/SessionFilterForm';
import { useLocationParams } from '../../hooks/useLocationParams';
import { useSessions } from '../../hooks/useSessions';
import { SectionContainer } from '../../components/SectionContainer/SectionContainer';
import { FilterResultsLoader } from '../../components/Loaders/FilterResultsLoader/FilterResultsLoader';
import { FilterResults } from '../../components/FilterResults/FilterResults';

export const SESSION_FILTER_OPTIONS = [
  {
    id: 'year',
    label: 'Year',
  },
  {
    id: 'session_key',
    label: 'Session Key',
  },
  {
    id: 'session_name',
    label: 'Session Name',
  },
  {
    id: 'session_type',
    label: 'Session Type'
  },
  {
    id: 'circuit_short_name',
    label: 'Circuit Name',
  },
  {
    id: 'country_name',
    label: 'Country',
  },
  {
    id: 'circuit_short_name',
    label: 'Circuit Name'
  },
  {
    id: 'circuit_key',
    label: 'Circuit Key'
  }
];

export const Sessions = () => {
  const {
    session_key,
    meeting_key
  } = useLocationParams();
    const {
    data: meetingSessions, 
    isSuccess: isSessionsSuccess,
    isLoading: isSessionsLoading,
    isError: isSessionsError,
  } = useSessions({ meeting_key: parseInt(meeting_key) });

  console.log('zebra', meetingSessions);

  const handleClick = ({ data }: { data: any; }) => {
    console.log('session_key', data);
  }

  return (
    <div className='session-container'>
      <SessionFilterForm />
      {
        isSessionsLoading && 
        <SectionContainer>
          <FilterResultsLoader 
            filterOptions={SESSION_FILTER_OPTIONS}
          />
        </SectionContainer>
      }
      {
        isSessionsSuccess &&
        <SectionContainer>
          <FilterResults 
            data={meetingSessions.getAll()}
            filterOptions={SESSION_FILTER_OPTIONS}
            handleClick={handleClick}
          />
        </SectionContainer>
      }
    </div>
  );
};