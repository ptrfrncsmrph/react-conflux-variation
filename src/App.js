import React from 'react';
import createConflux from 'react-conflux';
import counterReducer from 'store/reducers/counter';
import titleReducer from 'store/reducers/title';

import Counter from 'components/Counter';

const [CounterProvider, useCounterValue] = createConflux(counterReducer);
const [TitleProvider, useTitleValue] = createConflux(titleReducer);
export { useCounterValue, useTitleValue };

const App = () => {
  const state = { ...useCounterValue()[0], ...useTitleValue()[0] };
  return (
    <>
      <Counter />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default () => (
  <CounterProvider>
    <TitleProvider>
      <App />
    </TitleProvider>
  </CounterProvider>
);
