import {createSelector} from 'reselect';

const getReadings = createSelector(
  state => state.readings,
  readings =>
    (readings || [])
      .slice(0)
      .sort((a, b) => Math.sign(b.createdAt - a.createdAt)),
);

const getLastReading = state => state.last || {};

const isFlu = createSelector(
  getLastReading,
  reading => !!reading.isFlu,
);

const getLastReadings = createSelector(
  getReadings,
  readings => readings.slice(0, 10),
);

export {getReadings, isFlu, getLastReadings};
