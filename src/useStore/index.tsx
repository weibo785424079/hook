import React, {
  createContext, useContext, useReducer, useMemo, useRef, useCallback,
} from 'react';

const useStore = (reducer, initState) => {
  const StateContext = createContext(initState);

  const useContextState = () => useContext(StateContext);

  const Provider = ({ children }: {children: React.ReactChild}) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const value = useMemo(() => [state, dispatch], [state, dispatch]);
    return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
  };

  const useActions = (actions) => {
    const [state, dispatch] = useContextState();
    const fns = React.useRef(actions);
    const stateRef = useRef(state);
    stateRef.current = state;
    const getState = useCallback(() => stateRef.current, []);

    return useMemo(
      () => Object.keys(fns.current).reduce((prev, key) => {
        prev[key] = fns.current[key]({ dispatch, getState });

        return prev;
      }, {} as any),
      [dispatch, getState],
    );
  };

  return { useContextState, useActions, Provider };
};

export default useStore;
