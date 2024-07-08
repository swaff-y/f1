import { useQuery } from '@tanstack/react-query';
import { useOpenF1 } from '../context/openF1';
import { Meeting } from '../models/Meeting';
import { UseQueryResponse } from './types';
import { MeetingParams } from '../api/openF1API';

export const useMeetings = (params: MeetingParams): UseQueryResponse => {
  const { fetchMeetings } = useOpenF1();
  const result = useQuery({
    queryKey: ['meetings', params],
    queryFn: () => fetchMeetings(params),
  });
  const { data, isError, isLoading, isSuccess } = result;
  const meetings = Meeting.buildMeetingCollection({ data });

  return {
    data: meetings,
    isError,
    isLoading,
    isSuccess,
  };
};
