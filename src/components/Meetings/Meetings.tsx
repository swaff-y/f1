import './meetings.css';
import { FilterForm } from '../FilterForm/FilterForm';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { FilterResults } from '../FilterResults/FilterResults';
import { useState } from 'react';

const MEETING_FILTER_OPTIONS = [
  {
    id: 'year',
    label: 'Year',
  },
  {
    id: 'gpName',
    label: 'GP Name',
  },
  {
    id: 'gpKey',
    label: 'GP Key',
  },
  {
    id: 'countryName',
    label: 'Country Name',
  },
  {
    id: 'countryKey',
    label: 'Country Key'
  }
];

export const Meetings = () => {
  const [selection, setSelection] = useState({ label: 'Year', id: 'year' });

  return (
    <div className='meeting-container'>
      <SectionContainer>
        <FilterForm
          filterOptions={MEETING_FILTER_OPTIONS}
          setSelection={setSelection}
          selection={selection}
        />
      </SectionContainer>
      <SectionContainer>
        <FilterResults selection={selection}/>
      </SectionContainer>
    </div>
  );
};