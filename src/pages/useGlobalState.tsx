import { createContext, useState, useContext } from "react";

interface GlobalStateProps {
  count: number;
  customNum: number;
}

const initialState: GlobalStateProps = {
  count: 0,
  customNum: 4,
};

interface ContextProps {
  globalState: GlobalStateProps;
  setGlobalState: React.Dispatch<React.SetStateAction<GlobalStateProps>>;
}

const GlobalStateContext = createContext<ContextProps | undefined>(undefined);

export function StateProvider(props: React.PropsWithChildren<object>) {
  const [globalState, setGlobalState] = useState<GlobalStateProps>(initialState);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a StateProvider");
  }
  return context;
}
