import {POST_READING, FETCH_READINGS} from './constants';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_READING:
      if (action.status !== 'success') {
        return {
          ...state,
          last: undefined,
        };
      }
      return {
        ...state,
        last: {
          ...action.payload,
        },
      };
    case FETCH_READINGS:
      if (action.status !== 'success') {
        return {
          ...state,
          readings: undefined,
        };
      }
      return {
        ...state,
        readings: action.payload.items,
      };
    default:
      return state;
  }
};

export default reducer;
