import {
  SET_READING,
  CLEAR_READING,
  POST_READING,
  FETCH_READINGS,
} from './constants';
import {API_URL} from 'react-native-dotenv';
import {getLastReading} from './selectors';

const setReading = data => {
  return {
    type: SET_READING,
    payload: {
      ...data,
    },
  };
};

const clearReading = () => ({
  type: CLEAR_READING,
});

/**
 * Call the API and post a reading
 * @param {object} reading
 */
const postReading = () => (dispatch, getState) =>
  new Promise(async (resolve, reject) => {
    const reading = {
      ...getLastReading(getState()),
    };

    try {
      const response = await fetch(`${API_URL}/readings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reading),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(`${json.message} (Status Code: ${response.status})`);
      }

      dispatch({
        type: POST_READING,
        status: 'success',
        payload: {
          ...json,
        },
      });

      resolve();
    } catch (err) {
      dispatch({
        type: POST_READING,
        status: 'error',
        payload: {
          message: err.message,
        },
      });

      reject(err);
    }
  });

/**
 * Get the list of all the readings
 */
const fetchReadings = () => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_URL}/readings`, {method: 'GET'});
      const json = await response.json();

      if (!response.ok) {
        throw new Error(`${json.message} (Status Code: ${response.status})`);
      }

      dispatch({
        type: FETCH_READINGS,
        status: 'success',
        payload: {items: json},
      });

      resolve();
    } catch (err) {
      dispatch({
        type: FETCH_READINGS,
        status: 'error',
        payload: {
          message: err.message,
        },
      });

      reject(err);
    }
  });

export {setReading, clearReading, postReading, fetchReadings};
