import { useQuery } from '@tanstack/react-query';
import { useOpenF1 } from '../context/openF1';
import { UseQueryResponse } from './types';
import { Session } from '../models/Session';

type UseSessionsProps = {
  meeting_key: number;
};

export const useSessions = ({
  meeting_key,
}: UseSessionsProps): UseQueryResponse => {
  const { fetchSessions } = useOpenF1();
  const sessionsResult = useQuery({
    queryKey: ['sessions', meeting_key],
    queryFn: () => fetchSessions({ meeting_key }),
  });
  const { data, isError, isLoading, isSuccess } = sessionsResult;
  const sessions = Session.buildSessionCollection({ data });

  return {
    data: sessions,
    isError,
    isLoading,
    isSuccess,
  };
};
