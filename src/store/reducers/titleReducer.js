import { SET_TITLE } from 'store/constants';

const initialState = {
  title: 'This is the title from the titleReducer'
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { title: action.payload };
    default:
      return state;
  }
};
