import {
  SET_READING,
  POST_READING,
  FETCH_READINGS,
  CLEAR_READING,
} from './constants';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_READING:
      return {
        ...state,
        last: {
          ...(state.last || {}),
          ...action.payload,
        },
      };
    case CLEAR_READING:
      return {
        ...state,
        last: {},
      };
    case POST_READING:
      if (action.status !== 'success') {
        return state;
      }
      return {
        ...state,
        last: {
          ...action.payload,
        },
      };
    case FETCH_READINGS:
      if (action.status !== 'success') {
        return state;
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
