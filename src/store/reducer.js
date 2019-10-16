import {POST_READING, FETCH_READINGS} from './constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case POST_READING:
      return {
        ...state,
        reading: {
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
