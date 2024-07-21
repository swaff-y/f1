import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OpenF1API } from '../api/openF1API';
import { OpenF1Provider } from '../context/openF1';


interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();
const openF1 = new OpenF1API();

export const AppProvider: FC<ProvidersProps> = ({ children }) => {
  return (
    <OpenF1Provider value={openF1}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </OpenF1Provider>
  );
};