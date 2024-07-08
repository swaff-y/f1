import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useMeetings } from '../../hooks/useMeetings';
import { Meeting } from '../../models/Meeting';

type MeetingFilterResponse = {
  meetings: Meeting[];
  setSelection: Dispatch<SetStateAction<{ label: string; id: string }>>;
  setValue: (value: string) => void;
  selection: { label: string; id: string };
  value: string | number;
  onSubmit: () => void;
  isLoading: boolean;
  isSuccess: boolean;
};

export const useMeetingFilter = (): MeetingFilterResponse => {
  const [selection, setSelection] = useState({ label: 'Year', id: 'year' });
  const [value, setValue] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    data: meetings,
    isSuccess,
    isLoading,
  } = useMeetings({
    meeting_name:
      isSubmit && selection.id === 'meeting_name' ? value : undefined,
    meeting_key:
      isSubmit && selection.id === 'meeting_key' ? parseInt(value) : undefined,
    country_name:
      isSubmit && selection.id === 'country_name' ? value : undefined,
    country_key:
      isSubmit && selection.id === 'country_key' ? parseInt(value) : undefined,
    year: isSubmit && selection.id === 'year' ? value : undefined,
  });

  const onSetValue = (value: string): void => {
    setIsSubmit(false);
    setValue(value);
  };

  return {
    meetings,
    setSelection,
    setValue: onSetValue,
    selection,
    value,
    onSubmit: () => {
      setIsSubmit(true);
    },
    isLoading,
    isSuccess,
  };
};
