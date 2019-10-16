import {POST_READING} from './constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case POST_READING:
      return {
        ...state,
        reading: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
