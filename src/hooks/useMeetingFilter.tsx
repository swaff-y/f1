import { useLocationParams } from "./useLocationParams";
import { useMeetings } from "./useMeetings";
import { Utils } from "../utils/Utils";

export type FilterOption = {
  label: string;
  id: string;
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
    id: 'circuit_short_name',
    label: 'Circuit Name'
  },
  {
    id: 'circuit_key',
    label: 'Circuit Key'
  }
];

export const useMeetingFilter = () => {
  const {
    filter,
    value
  } = useLocationParams();
  const selection = Utils.getSelectionFromFilterOptions(filter, MEETING_FILTER_OPTIONS)
  let filterOptions = YEAR_FILTER_OPTIONS;

  switch (selection.id) {
    case 'year':
      filterOptions = YEAR_FILTER_OPTIONS;
      break;
    case 'meeting_name':
      filterOptions = GP_NAME_FILTER_OPTIONS;
      break;
    case 'meeting_key':
      filterOptions = GP_KEY_FILTER_OPTIONS;
      break;
    case 'country_name':
      filterOptions = COUNTRY_FILTER_OPTIONS;
      break;
    case 'country_key':
      filterOptions = COUNTRY_KEY_FILTER_OPTIONS;
      break;
    case 'circuit_name':
      filterOptions = CIRCUIT_FILTER_OPTIONS;
      break;
    case 'circuit_key':
      filterOptions = CIRCUIT_KEY_FILTER_OPTIONS;
      break;
    default:
      filterOptions = YEAR_FILTER_OPTIONS;
  }

  const params = {
    meeting_name:
      value && selection.id === 'meeting_name'
        ? value
        : undefined,
    meeting_key:
      value && selection.id === 'meeting_key'
        ? parseInt(value)
        : undefined,
    country_name:
      value && selection.id === 'country_name'
        ? value
        : undefined,
    country_key:
      value && selection.id === 'country_key'
        ? parseInt(value)
        : undefined,
    circuit_short_name:
      value && selection.id === 'circuit_short_name'
        ? value
        : undefined,
    circuit_key:
      value && selection.id === 'circuit_key'
        ? parseInt(value)
        : undefined,
    year:
      value && selection.id === 'year'
        ? value
        : undefined,
  };

  let { data: meetings, isLoading, isSuccess, isError } = useMeetings(params);

  return {
    meetings: meetings.getAll(),
    filterOptions,
    isLoading,
    isSuccess,
    isError
  };
};