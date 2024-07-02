import { useQuery } from '@tanstack/react-query';
import { useOpenF1 } from '../context/openF1';
import { Meeting } from '../models/Meeting';

interface UseQueryResponse {
  data: any;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  meetingKey?: number;
}

type UseMeetingProps = {
  year: string;
};

export const useMeetings = ({ year }: UseMeetingProps): UseQueryResponse => {
  const { fetchMeetings } = useOpenF1();
  const result = useQuery({
    queryKey: ['meetings', year],
    queryFn: () => fetchMeetings({ year }),
  });
  const { data, isError, isLoading, isSuccess } = result;
  const meetings = Meeting.buildMeetingCollection({ year, data });

  return {
    data: meetings,
    isError,
    isLoading,
    isSuccess,
  };
};
