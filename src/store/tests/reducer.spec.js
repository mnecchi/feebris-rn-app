import reducer from '../reducer';
import {POST_READING, FETCH_READINGS} from '../constants';

describe('reducer', () => {
  it('should return the same state if the status is not success', () => {
    const state = {test: true};
    expect(reducer(state, {type: 'Unknown', status: 'unknown'})).toBe(state);
  });

  it('should return the same state if the action is unknown', () => {
    const state = {test: true};
    expect(reducer(state, {type: 'Unknown', status: 'success'})).toBe(state);
  });

  it('should set the last reading in the state', () => {
    const state = {test: true};
    const mockedReading = {
      id: 'abcdef1234',
      cough: false,
      feverInLast5Days: true,
      temperature: 36,
      isFlu: false,
      createdAt: 1111111,
    };

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

  it('should set the list of reading in the state', () => {
    const state = {test: true};
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
