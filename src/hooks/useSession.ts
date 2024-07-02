import { useQuery } from '@tanstack/react-query';
import { useOpenF1 } from '../context/openF1';
import { UseQueryResponse } from './types';
import { Session } from '../models/Session';

type UseSessionProps = {
  meeting_key: number;
  session_key: number;
};

export const useSession = ({
  meeting_key,
  session_key,
}: UseSessionProps): UseQueryResponse => {
  const { fetchSession } = useOpenF1();
  const result = useQuery({
    queryKey: ['session', { meeting_key, session_key }],
    queryFn: () => fetchSession(meeting_key, session_key),
  });
  const { data, isError, isLoading, isSuccess } = result;

  return {
    data: Session.buildSession(data?.[0]),
    isError,
    isLoading,
    isSuccess,
  };
};
