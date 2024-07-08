import { useState } from 'react';
import { useMeetings } from '../../hooks/useMeetings';
import { Meeting } from '../../models/Meeting';

type MeetingFilterResponse = {
  meetings: Meeting[];
  filterOptions: { label: string; id: string }[];
  setSelection: (selection: { label: string; id: string }) => void;
  setValue: (value: string) => void;
  selection: { label: string; id: string };
  value: string | number;
  onSubmit: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isNeedingInput: boolean;
};

const YEAR_FILTER_OPTIONS = [
  { label: 'Year', id: 'year' },
  { label: 'GP Name', id: 'meeting_name' },
  { label: 'GP Key', id: 'meeting_key' },
  { label: 'Country', id: 'country_name' },
  { label: 'Country Key', id: 'country_key' },
  { label: 'Circuit Name', id: 'circuit_short_name' },
  { label: 'Circuit Key', id: 'circuit_key' },
  { label: 'Date', id: 'date_start' },
];

const GP_NAME_FILTER_OPTIONS = [
  { label: 'GP Name', id: 'meeting_name' },
  { label: 'GP Key', id: 'meeting_key' },
  { label: 'Country', id: 'country_name' },
  { label: 'Country Key', id: 'country_key' },
  { label: 'Circuit Name', id: 'circuit_short_name' },
  { label: 'Circuit Key', id: 'circuit_key' },
  { label: 'Year', id: 'year' },
  { label: 'Date', id: 'date_start' },
];

const GP_KEY_FILTER_OPTIONS = [
  { label: 'GP Key', id: 'meeting_key' },
  { label: 'GP Name', id: 'meeting_name' },
  { label: 'Country Key', id: 'country_key' },
  { label: 'Country', id: 'country_name' },
  { label: 'Circuit Key', id: 'circuit_key' },
  { label: 'Circuit Name', id: 'circuit_short_name' },
  { label: 'Year', id: 'year' },
  { label: 'Date', id: 'date_start' },
];

const COUNTRY_FILTER_OPTIONS = [
  { label: 'Country', id: 'country_name' },
  { label: 'Country Key', id: 'country_key' },
  { label: 'GP Name', id: 'meeting_name' },
  { label: 'GP Key', id: 'meeting_key' },
  { label: 'Circuit Name', id: 'circuit_short_name' },
  { label: 'Circuit Key', id: 'circuit_key' },
  { label: 'Year', id: 'year' },
  { label: 'Date', id: 'date_start' },
];

const COUNTRY_KEY_FILTER_OPTIONS = [
  { label: 'Country Key', id: 'country_key' },
  { label: 'Country', id: 'country_name' },
  { label: 'GP Key', id: 'meeting_key' },
  { label: 'GP Name', id: 'meeting_name' },
  { label: 'Circuit Key', id: 'circuit_key' },
  { label: 'Circuit Name', id: 'circuit_short_name' },
  { label: 'Year', id: 'year' },
  { label: 'Date', id: 'date_start' },
];

const CIRCUIT_FILTER_OPTIONS = [
  { label: 'Circuit Name', id: 'circuit_short_name' },
  { label: 'Circuit Key', id: 'circuit_key' },
  { label: 'Country', id: 'country_name' },
  { label: 'Country Key', id: 'country_key' },
  { label: 'GP Name', id: 'meeting_name' },
  { label: 'GP Key', id: 'meeting_key' },
  { label: 'Year', id: 'year' },
  { label: 'Date', id: 'date_start' },
];

const CIRCUIT_KEY_FILTER_OPTIONS = [
  { label: 'Circuit Key', id: 'circuit_key' },
  { label: 'Circuit Name', id: 'circuit_short_name' },
  { label: 'Country Key', id: 'country_key' },
  { label: 'Country', id: 'country_name' },
  { label: 'GP Key', id: 'meeting_key' },
  { label: 'GP Name', id: 'meeting_name' },
  { label: 'Year', id: 'year' },
  { label: 'Date', id: 'date_start' },
];

export const useMeetingFilter = (): MeetingFilterResponse => {
  const [selection, setSelection] = useState({ label: 'Year', id: 'year' });
  const [filterOptions, setFilterOptions] = useState(YEAR_FILTER_OPTIONS);
  const [value, setValue] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const params = {
    meeting_name:
      isSubmit && selection.id === 'meeting_name' ? value : undefined,
    meeting_key:
      isSubmit && selection.id === 'meeting_key' ? parseInt(value) : undefined,
    country_name:
      isSubmit && selection.id === 'country_name' ? value : undefined,
    country_key:
      isSubmit && selection.id === 'country_key' ? parseInt(value) : undefined,
    circuit_name:
      isSubmit && selection.id === 'circuit_name' ? value : undefined,
    circuit_key:
      isSubmit && selection.id === 'circuit_key' ? parseInt(value) : undefined,
    year: isSubmit && selection.id === 'year' ? value : undefined,
  };

  let { data: meetings, isSuccess, isLoading } = useMeetings(params);

  const handleFilterSelection = (selection: { label: string; id: string }) => {
    switch (selection.id) {
      case 'year':
        setFilterOptions(YEAR_FILTER_OPTIONS);
        break;
      case 'meeting_name':
        setFilterOptions(GP_NAME_FILTER_OPTIONS);
        break;
      case 'meeting_key':
        setFilterOptions(GP_KEY_FILTER_OPTIONS);
        break;
      case 'country_name':
        setFilterOptions(COUNTRY_FILTER_OPTIONS);
        break;
      case 'country_key':
        setFilterOptions(COUNTRY_KEY_FILTER_OPTIONS);
        break;
      case 'circuit_name':
        setFilterOptions(CIRCUIT_FILTER_OPTIONS);
        break;
      case 'circuit_key':
        setFilterOptions(CIRCUIT_KEY_FILTER_OPTIONS);
        break;
      default:
        setFilterOptions(YEAR_FILTER_OPTIONS);
    }
  };

  const onSetValue = (value: string): void => {
    setIsSubmit(false);
    setValue(value);
  };

  const onSetSelection = (selection: { label: string; id: string }): void => {
    setIsSubmit(false);
    handleFilterSelection(selection);
    setSelection(selection);
  };

  if (!isSubmit) {
    isSuccess = false;
  }

  return {
    meetings,
    filterOptions,
    setSelection: onSetSelection,
    setValue: onSetValue,
    selection,
    value,
    onSubmit: () => {
      setIsSubmit(true);
    },
    isLoading,
    isSuccess: !isSubmit ? false : isSuccess,
    isNeedingInput: !isSubmit,
  };
};
