import {POST_READING, FETCH_READINGS} from './constants';

const reducer = (state = {}, action) => {
  if (action.status !== 'success') {
    return state;
  }

  switch (action.type) {
    case POST_READING:
      return {
        ...state,
        last: {
          ...action.payload,
        },
      };
    case FETCH_READINGS:
      return {
        ...state,
        readings: action.payload.items,
      };
    default:
      return state;
  }
};

export default reducer;
