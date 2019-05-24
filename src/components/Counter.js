import React from 'react';
import { INCREMENT, DECREMENT, SET_TITLE } from 'store/constants';
import { useCounterValue, useTitleValue } from 'App';

const Counter = () => {
  const [counterState, counterDispatch] = useCounterValue();
  const [titleState, titleDispatch] = useTitleValue();
  const increment = _e => {
    counterDispatch({ type: INCREMENT });
  };
  const decrement = _e => {
    counterDispatch({ type: DECREMENT });
  };
  const setTitle = e => {
    titleDispatch({ type: SET_TITLE, payload: e.target.value });
  };

  return (
    <div>
      <h1>{titleState.title}</h1>
      <input onChange={setTitle} value={titleState.title} />
      <p>This is the count from the counterReducer: {counterState.count}</p>
      <button type="button" onClick={increment}>
        Increase
      </button>
      <button type="button" onClick={decrement}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
