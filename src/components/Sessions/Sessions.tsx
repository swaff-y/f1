import './sessions.css';
import { FilterForm } from '../FilterForm/FilterForm';
import { SectionContainer } from '../SectionContainer/SectionContainer';

const MEETING_FILTER_OPTIONS = ['Year', 'GP Name', 'GP Key', 'Country Name', 'Country Key'];

export const Sessions = () => {
  return (
    <SectionContainer>
      <FilterForm filterOptions={MEETING_FILTER_OPTIONS}/>
    </SectionContainer>
  );
};