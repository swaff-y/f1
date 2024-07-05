import './sessions.css';
import { FilterForm } from '../FilterForm/FilterForm';

const MEETING_FILTER_OPTIONS = ['Year', 'GP Name', 'GP Key', 'Country Name', 'Country Key'];

export const Sessions = () => {
  return (
    <div className='session-container'>
      <FilterForm filterOptions={MEETING_FILTER_OPTIONS}/>
    </div>
  );
};