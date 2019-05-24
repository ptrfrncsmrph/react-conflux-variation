import {
  createContext,
  createElement,
  useReducer,
  useMemo,
  useContext
} from 'react';

export default function makeStateContext(reducer) {
  const StateContext = createContext();

  const useStateValue = () => {
    return useContext(StateContext);
  };

  const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      reducer,
      reducer(undefined, { type: '@@INIT' })
    );
    const value = useMemo(
      () => {
        return [state, dispatch];
      },
      [state]
    );

    return createElement(StateContext.Provider, { value }, children);
  };

  return [StateProvider, useStateValue];
}
