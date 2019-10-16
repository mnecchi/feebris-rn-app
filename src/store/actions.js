import {POST_READING, FETCH_READINGS} from './constants';
import {API_URL} from 'react-native-dotenv';

/**
 * Call the API and post a reading
 * @param {*} reading
 */
const postReading = reading => dispatch =>
  new Promise(async (resolve, reject) => {
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

export {postReading, fetchReadings};
