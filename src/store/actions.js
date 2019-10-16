import {POST_READING, FETCH_READINGS} from './constants';
import {API_URL} from 'react-native-dotenv';

/**
 * Call the API and post a reading
 * @param {*} reading
 */
const postReading = reading => dispatch =>
  fetch(`${API_URL}/readings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reading),
  })
    .then(response => {
      if (!response.ok) {
        // an error occured during the API call
        throw new Error(`Error ${response.status}`);
      }
      // get the response json
      return response.json();
    })
    .then(item => {
      // dispatch the redux action
      dispatch({
        type: POST_READING,
        status: 'success',
        payload: {
          ...item,
        },
      });
    })
    .catch(err => {
      dispatch({
        type: POST_READING,
        status: 'error',
        payload: {
          message: err.message,
        },
      });
    });

/**
 * Get the list of all the readings
 */
const fetchReadings = () => dispatch =>
  fetch(`${API_URL}/readings`, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        // an error occured during the API call
        throw new Error(`Error ${response.status}`);
      }
      // get the response json
      return response.json();
    })
    .then(items => {
      // dispatch the redux action
      dispatch({
        type: FETCH_READINGS,
        status: 'success',
        payload: {items},
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_READINGS,
        status: 'error',
        payload: {
          message: err.message,
        },
      });
    });

export {postReading, fetchReadings};
