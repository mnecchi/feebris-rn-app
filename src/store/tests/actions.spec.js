import {postReading, fetchReadings} from '../actions';
import {POST_READING, FETCH_READINGS} from '../constants';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

afterEach(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

describe('postReading action creator', () => {
  it('should dispatch an action with error status', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 400,
        json: () => ({message: 'Network Error'}),
      }),
    );
    const store = mockStore({});

    try {
      await store.dispatch(
        postReading({temperature: 38, cough: true, feverInLast5Days: true}),
      );
    } catch (_) {
    } finally {
      const [action] = store.getActions();
      expect(action).toEqual({
        type: POST_READING,
        status: 'error',
        payload: {
          message: 'Network Error (Status Code: 400)',
        },
      });
    }
  });

  it('should dispatch an action with success status', async () => {
    const mockedReading = {
      id: 'abcdef1234',
      cough: false,
      feverInLast5Days: true,
      temperature: 36,
      isFlu: false,
      createdAt: 1111111,
    };

    global.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ok: true, json: () => mockedReading}),
      );

    const store = mockStore({});

    try {
      await store.dispatch(
        postReading({
          temperature: mockedReading.temperature,
          cough: mockedReading.cough,
          feverInLast5Days: mockedReading.feverInLast5Days,
        }),
      );
    } catch (_) {
    } finally {
      const [action] = store.getActions();
      expect(action).toEqual({
        type: POST_READING,
        status: 'success',
        payload: {
          ...mockedReading,
        },
      });
    }
  });
});

describe('fetchReadings action creator', () => {
  it('should dispatch an action with error status', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 400,
        json: () => ({message: 'Network Error'}),
      }),
    );
    const store = mockStore({});

    try {
      await store.dispatch(fetchReadings());
    } catch (_) {
    } finally {
      const [action] = store.getActions();
      expect(action).toEqual({
        type: FETCH_READINGS,
        status: 'error',
        payload: {
          message: 'Network Error (Status Code: 400)',
        },
      });
    }
  });

  it('should dispatch an action with success status', async () => {
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

    global.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ok: true, json: () => mockedReadings}),
      );

    const store = mockStore({});
    try {
      await store.dispatch(fetchReadings());
    } catch (_) {
    } finally {
      const [action] = store.getActions();
      expect(action).toEqual({
        type: FETCH_READINGS,
        status: 'success',
        payload: {
          items: mockedReadings,
        },
      });
    }
  });
});
