import './meetings.css';
import { FilterForm } from '../FilterForm/FilterForm';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { FilterResults } from '../FilterResults/FilterResults';
import { FilterResultsLoader } from '../FilterResultsLoader/FilterResultsLoader';
import { useMeetingFilter } from './useMeetingFilter';
import { MeetingClickResults } from '../ClickResults/MeetingClickResults';

const MEETING_FILTER_OPTIONS = [
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
    meetings,
    filterOptions,
    setSelection,
    setValue,
    selection,
    value,
    isLoading, 
    isSuccess,
    onSubmit,
    showMeeting,
    handleClick
  } = useMeetingFilter();

  return (
    <div className='meeting-container'>
      <SectionContainer>
        <FilterForm
          filterOptions={MEETING_FILTER_OPTIONS}
          setSelection={setSelection}
          setValue={setValue}
          selection={selection}
          value={value}
          onSubmit={onSubmit}
        />
      </SectionContainer>
      {isLoading &&
        <SectionContainer>
          <FilterResultsLoader 
            filterOptions={filterOptions}
          />
        </SectionContainer>
      }
      {isSuccess && !showMeeting && !isLoading &&
        <SectionContainer>
          <FilterResults 
            data={meetings}
            filterOptions={filterOptions}
            handleClick={handleClick}
          />
        </SectionContainer>
      }
      { showMeeting &&
        <SectionContainer>
          <MeetingClickResults data={showMeeting} />
        </SectionContainer>
      }
    </div>
  );
};