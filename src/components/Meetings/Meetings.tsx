import './meetings.css';
import { FilterForm } from '../FilterForm/FilterForm';

const MEETING_FILTER_OPTIONS = ['Year', 'GP Name', 'GP Key', 'Country Name', 'Country Key'];

export const Meetings = () => {
  return (
    <div className='meeting-container'>
      <div className='section-container'>
        <FilterForm filterOptions={MEETING_FILTER_OPTIONS}/>
      </div>
      <div className='section-container'>Hello</div>
    </div>
  );
};