import { useQuery } from '@tanstack/react-query';
import { useOpenF1 } from '../context/openF1';
import { Driver } from '../models/Driver';
import { UseQueryResponse } from './types';

type UseDriverProps = {
  meeting_key: number;
  session_key: number;
  driver_number: number;
};

export const useDriver = ({
  meeting_key,
  session_key,
  driver_number,
}: UseDriverProps): UseQueryResponse => {
  const { fetchDriver } = useOpenF1();
  const result = useQuery({
    queryKey: ['driver', { meeting_key, session_key, driver_number }],
    queryFn: () => fetchDriver(driver_number, meeting_key, session_key),
  });
  const { data, isError, isLoading, isSuccess } = result;

  return {
    data: Driver.buildDriver(data?.[0]),
    isError,
    isLoading,
    isSuccess,
  };
};
