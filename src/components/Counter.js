import React, { useRef, useMemo } from 'react';
import {
  INCREMENT_A,
  DECREMENT_A,
  INCREMENT_B,
  DECREMENT_B,
  SET_TITLE
} from 'store/constants';
import { useCounterValue, useTitleValue } from 'App';

const Counter = () => {
  const ref = useRef(0);
  const [countA, counterDispatch] = useCounterValue(({ countA }) => countA);
  const [{ title }, titleDispatch] = useTitleValue();
  const increment = count => _e => {
    counterDispatch({ type: count === 'a' ? INCREMENT_A : INCREMENT_B });
  };
  const decrement = count => _e => {
    counterDispatch({ type: count === 'a' ? DECREMENT_A : DECREMENT_B });
  };
  const setTitle = e => {
    titleDispatch({ type: SET_TITLE, payload: e.target.value });
  };

  return useMemo(
    () => (
      <div>
        <h3
          style={{ color: 'tomato', fontStyle: 'italic', fontWeight: 'normal' }}
        >
          Renders: {ref.current++}
        </h3>
        <h1>{title}</h1>
        <input onChange={setTitle} value={title} />
        <fieldset>
          <legend>A</legend>
          <p>
            This is <code>countA</code> from the <code>counterReducer</code>:{' '}
            {countA}
          </p>
          <button type="button" onClick={increment('a')}>
            +
          </button>
          <button type="button" onClick={decrement('a')}>
            &minus;
          </button>
        </fieldset>
        <fieldset>
          <legend>B</legend>
          <p>
            The buttons below will increment or decrement <code>countB</code>,
            but that shouldn't trigger a re-render of this component since we're
            not rendering anything based on <code>countB</code>
          </p>
          <button type="button" onClick={increment('b')}>
            +
          </button>
          <button type="button" onClick={decrement('b')}>
            &minus;
          </button>
        </fieldset>
      </div>
    ),
    [countA, title]
  );
};

export default Counter;
