import {
  createContext,
  createElement,
  useReducer,
  useMemo,
  useContext
} from 'react';

const id = x => x;

export default function createConflux(reducer) {
  const StateContext = createContext();

  const useStateValue = (selector = id) => {
    const [state, dispatch] = useContext(StateContext);
    return [selector(state), dispatch];
  };

  const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      reducer,
      reducer(undefined, { type: '@@INIT' })
    );
    const value = useMemo(() => [state, dispatch], [state]);

    return createElement(StateContext.Provider, { value }, children);
  };

  return [StateProvider, useStateValue];
}
