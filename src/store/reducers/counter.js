import {
  INCREMENT_A,
  DECREMENT_A,
  INCREMENT_B,
  DECREMENT_B
} from 'store/constants';

const initialState = {
  countA: 0,
  countB: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_A:
      return {
        ...state,
        countA: state.countA + 1
      };
    case DECREMENT_A:
      return {
        ...state,
        countA: state.countA - 1
      };
    case INCREMENT_B:
      return {
        ...state,
        countB: state.countB + 1
      };
    case DECREMENT_B:
      return {
        ...state,
        countB: state.countB - 1
      };
    default:
      return state;
  }
};
