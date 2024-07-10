import { useEffect, useState } from 'react';
import { useMeetings } from '../../hooks/useMeetings';
import { Meeting } from '../../models/Meeting';
import { useLocation, useNavigate } from 'react-router-dom';
import { Utils } from '../../utils/Utils';
import { MEETING_FILTER_OPTIONS } from './Meetings';

export type FilterOption = {
  label: string;
  id: string;
};

type MeetingFilterResponse = {
  meetings: Meeting[];
  filterOptions: FilterOption[];
  setSelection: (selection: { label: string; id: string }) => void;
  setValue: (value: string) => void;
  selection: { label: string; id: string };
  value: string | number;
  onSubmit: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  showMeeting: Meeting | null;
  handleClick: ({ data }: { data: any }) => void;
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
  let location = useLocation();
  const navigate = useNavigate();
  const queryParams = Utils.createParamsFromString(location.search);
  let selection = { label: 'Year', id: 'year' };
  let value = '';

  const [isSubmit, setIsSubmit] = useState(false);
  const [filterOptions, setFilterOptions] = useState(YEAR_FILTER_OPTIONS);
  const [showMeeting, setShowMeeting] = useState<null | Meeting>(null);

  if (queryParams.filter) {
    const label = MEETING_FILTER_OPTIONS.find(
      (elm) => elm.id === queryParams.filter
    )?.label;

    if (label) {
      selection = {
        label,
        id: queryParams.filter,
      };
    } else {
      selection = { label: 'Year', id: 'year' };
    }
  }

  if (queryParams.value) {
    value = queryParams?.value;
    console.log('value', queryParams.value);
    console.log('selection', selection.id);
  }

  const params = {
    meeting_name:
      (queryParams.value || isSubmit) && selection.id === 'meeting_name'
        ? value
        : undefined,
    meeting_key:
      (queryParams.value || isSubmit) && selection.id === 'meeting_key'
        ? parseInt(value)
        : undefined,
    country_name:
      (queryParams.value || isSubmit) && selection.id === 'country_name'
        ? value
        : undefined,
    country_key:
      (queryParams.value || isSubmit) && selection.id === 'country_key'
        ? parseInt(value)
        : undefined,
    circuit_name:
      (queryParams.value || isSubmit) && selection.id === 'circuit_name'
        ? value
        : undefined,
    circuit_key:
      (queryParams.value || isSubmit) && selection.id === 'circuit_key'
        ? parseInt(value)
        : undefined,
    year:
      (queryParams.value || isSubmit) && selection.id === 'year'
        ? value
        : undefined,
  };

  let { data: meetings, isSuccess, isLoading } = useMeetings(params);

  let meeting = null;
  if (queryParams?.meeting_key) {
    meeting =
      meetings.getByKey('meeting_key', parseInt(queryParams.meeting_key)) ||
      null;
  }

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
    navigate(`/home/meetings?filter=${selection.id}&value=${value}`);
    setShowMeeting(null);
  };

  const onSetSelection = (selection: { label: string; id: string }): void => {
    setIsSubmit(false);
    handleFilterSelection(selection);
    navigate(`/home/meetings?filter=${selection.id}`);
  };

  if (!isSubmit) {
    isSuccess = false;
  }

  const handleClick = ({ data }: { data: any }): void => {
    isSuccess = false;
    setShowMeeting(data);
    navigate(`/home/meetings?meeting_key=${data?.meeting_key}`);
  };

  return {
    meetings: meetings.getAll(),
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
    showMeeting: meeting || showMeeting,
    handleClick,
  };
};
