import {
  createContext,
  createElement,
  useReducer,
  useMemo,
  useContext
} from 'react';

export default function useStateContext(reducer) {
  const [state, dispatch] = useReducer(reducer);

  const StateContext = createContext(state);

  const value = useMemo(() => {
    return [state, dispatch];
  }, [state]);

  const useStateValue = () => {
    return useContext(StateContext);
  };

  const StateProvider = ({ children }) =>
    createElement(StateContext.Provider, { value }, children);

  return {
    useStateValue,
    StateProvider
  };
}
