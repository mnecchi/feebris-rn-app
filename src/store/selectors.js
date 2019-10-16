import {createSelector} from 'reselect';

const getReadings = createSelector(
  state => state.readings,
  readings =>
    (readings || [])
      .slice(0)
      .sort((a, b) => Math.sign(b.createdAt - a.createdAt)),
);

export {getReadings};
