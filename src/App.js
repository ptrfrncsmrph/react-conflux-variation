import React from 'react';
import makeStateContext from 'react-conflux';
import counterReducer from 'store/reducers/counter';
import titleReducer from 'store/reducers/title';

import Counter from 'components/Counter';

const [CounterProvider, useCounterValue] = makeStateContext(counterReducer);
const [TitleProvider, useTitleValue] = makeStateContext(titleReducer);
export { useCounterValue, useTitleValue };

const App = () => {
  return (
    <CounterProvider>
      <TitleProvider>
        <Counter />
      </TitleProvider>
    </CounterProvider>
  );
};

export default App;
