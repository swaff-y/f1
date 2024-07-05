import './meetings.css';
import { FilterForm } from '../FilterForm/FilterForm';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { FilterResults } from '../FilterResults/FilterResults';

const MEETING_FILTER_OPTIONS = ['Year', 'GP Name', 'GP Key', 'Country Name', 'Country Key'];

export const Meetings = () => {
  return (
    <div className='meeting-container'>
      <SectionContainer>
        <FilterForm filterOptions={MEETING_FILTER_OPTIONS}/>
      </SectionContainer>
      <SectionContainer>
        <FilterResults />
      </SectionContainer>
    </div>
  );
};