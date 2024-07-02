import { useQuery } from '@tanstack/react-query';
import { useOpenF1 } from '../context/openF1';
import { Meeting } from '../models/Meeting';

interface UseQueryResponse {
  data: any;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

type UseMeetingProps = {
  meeting_key: number;
};

export const useMeeting = ({
  meeting_key,
}: UseMeetingProps): UseQueryResponse => {
  const { fetchMeeting } = useOpenF1();
  const result = useQuery({
    queryKey: ['meeting', meeting_key],
    queryFn: () => fetchMeeting(meeting_key),
  });
  const { data, isError, isLoading, isSuccess } = result;

  return {
    data: Meeting.buildMeeting(data?.[0]),
    isError,
    isLoading,
    isSuccess,
  };
};
