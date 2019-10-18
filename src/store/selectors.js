import {createSelector} from 'reselect';
import {MAX_READINGS_SHOWN} from '../config';

// returns all readings ordered by date (latest first)
const getReadings = createSelector(
  state => state.readings,
  readings =>
    (readings || [])
      .slice(0)
      .sort((a, b) => Math.sign(b.createdAt - a.createdAt)),
);

// get the latest readings (count: MAX_READINGS_SHOWN)
const getLatestReadings = createSelector(
  getReadings,
  readings => readings.slice(0, MAX_READINGS_SHOWN),
);

// get the current reading
const getLastReading = state => state.last || {};

const getTemperature = createSelector(
  getLastReading,
  reading => reading.temperature || '',
);

const getCough = createSelector(
  getLastReading,
  reading => !!reading.cough,
);

const getFeverInLast5Days = createSelector(
  getLastReading,
  reading => !!reading.feverInLast5Days,
);

// return true if flu
const getIsFlu = createSelector(
  getLastReading,
  reading => !!reading.isFlu,
);

export {
  getReadings,
  getIsFlu,
  getLatestReadings,
  getLastReading,
  getTemperature,
  getCough,
  getFeverInLast5Days,
};
