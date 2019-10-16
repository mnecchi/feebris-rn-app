import reducer from '../reducer';
import {POST_READING, FETCH_READINGS} from '../constants';

describe('reducer', () => {
  it('should return an empty object if state is undefined', () => {
    expect(reducer(undefined, {type: 'Unknown', status: 'success'})).toEqual(
      {},
    );
  });

  it('should return the same state if the action is unknown', () => {
    const state = {test: true};
    expect(reducer(state, {type: 'Unknown', status: 'success'})).toBe(state);
  });

  describe('POST_READING', () => {
    const mockedReading = {
      id: 'abcdef1234',
      cough: false,
      feverInLast5Days: true,
      temperature: 36,
      isFlu: false,
      createdAt: 1111111,
    };

    it('should remove the last reading if status is error', () => {
      const state = {last: {...mockedReading}};

      expect(
        reducer(state, {
          type: POST_READING,
          status: 'error',
          payload: {
            message: 'Generic Error',
          },
        }).last,
      ).toBeUndefined();
    });

    it('should set the last reading in the state', () => {
      const state = {test: true};

      expect(
        reducer(state, {
          type: POST_READING,
          status: 'success',
          payload: {
            ...mockedReading,
          },
        }),
      ).toEqual({
        test: true,
        last: {
          ...mockedReading,
        },
      });
    });
  });

  describe('FETCH_READINGS', () => {
    const mockedReadings = [
      {
        id: 'abcdef1234',
        cough: false,
        feverInLast5Days: true,
        temperature: 36,
        isFlu: false,
        createdAt: 1111111,
      },
      {
        id: '123457890abc',
        cough: true,
        feverInLast5Days: true,
        temperature: 39,
        isFlu: true,
        createdAt: 1111112,
      },
    ];

    it('should remove the readings if status is error', () => {
      const state = {readings: mockedReadings};

      expect(
        reducer(state, {
          type: FETCH_READINGS,
          status: 'error',
          payload: {
            message: 'Generic Error',
          },
        }).readings,
      ).toBeUndefined();
    });

    it('should set the list of reading in the state', () => {
      const state = {test: true};

      expect(
        reducer(state, {
          type: FETCH_READINGS,
          status: 'success',
          payload: {
            items: mockedReadings,
          },
        }),
      ).toEqual({
        test: true,
        readings: mockedReadings,
      });
    });
  });
});
