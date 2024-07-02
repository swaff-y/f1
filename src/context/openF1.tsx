import React from 'react';
import { OpenF1API } from '../api/openF1API';

const OpenF1Context = React.createContext(null as unknown as OpenF1API);
const useOpenF1 = () => React.useContext(OpenF1Context);

const OpenF1Provider = ({ value, children } : {value: OpenF1API; children: any} ) => {
  return (
    <OpenF1Context.Provider value={value}>
      {children}
    </OpenF1Context.Provider>
  );
};

export { OpenF1Provider, useOpenF1 };