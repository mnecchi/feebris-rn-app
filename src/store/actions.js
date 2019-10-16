import {POST_READING} from './constants';

const postReading = reading => (dispatch, getState) => {
  setTimeout(() => {
    dispatch({
      type: POST_READING,
      payload: {
        ...reading,
      },
    });
  }, 2000);
};

export {postReading};
