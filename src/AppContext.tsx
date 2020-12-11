import React, { useState } from 'react';
import { createContext } from 'react';
import { GridOption } from './types';

type AppContextType = {
  gridOption: GridOption;
  setGridOption: (option: GridOption) => void;
};

const appContext = createContext<AppContextType>({
  gridOption: GridOption.OPTION_2_2,
  setGridOption: () => {},
});

export const AppContextProvider: React.FC = ({ children }) => {
  const [gridOption, setGridOption] = useState<GridOption>(
    GridOption.OPTION_2_2
  );

  return (
    <appContext.Provider
      value={{
        gridOption,
        setGridOption,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default appContext;
