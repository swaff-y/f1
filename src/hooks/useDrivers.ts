import { useQuery } from '@tanstack/react-query';
import { useOpenF1 } from '../context/openF1';
import { Driver } from '../models/Driver';
import { UseQueryResponse } from './types';

type UseDriversProps = {
  meeting_key: number;
  session_key?: number;
};

export const useDrivers = ({
  meeting_key,
  session_key,
}: UseDriversProps): UseQueryResponse => {
  const { fetchDrivers } = useOpenF1();
  const params = session_key ? { meeting_key, session_key } : { meeting_key };
  const result = useQuery({
    queryKey: ['drivers', { meeting_key, session_key }],
    queryFn: () => fetchDrivers(params),
  });
  const { data, isLoading } = result;
  let { isError, isSuccess } = result;
  const drivers = Driver.buildDriverCollection({
    meeting_key,
    session_key,
    data,
  });

  if (data?.length === 0) {
    isError = true;
    isSuccess = false;
  }

  return {
    data: drivers,
    isError,
    isLoading,
    isSuccess,
  };
};
