import React from 'react';
import makeStateContext from 'react-conflux';
import { counterReducer } from 'store/reducers/counterReducer';
import { titleReducer } from 'store/reducers/titleReducer';

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
