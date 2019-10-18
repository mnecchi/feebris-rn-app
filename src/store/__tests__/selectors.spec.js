import {
  getReadings,
  getLatestReadings,
  getTemperature,
  getCough,
  getFeverInLast5Days,
  getIsFlu,
} from '../selectors';
import {MAX_READINGS_SHOWN} from '../../config';

describe('getReadings selector', () => {
  it('should retun an empty array if no readings in the state', () => {
    expect(getReadings({})).toEqual([]);
  });

  it('should return all readings sorted by createdAt', () => {
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
        id: 'abc98765edf',
        cough: false,
        feverInLast5Days: true,
        temperature: 38,
        isFlu: false,
        createdAt: 1111113,
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

    const state = {
      readings: mockedReadings,
    };

    const readings = getReadings(state);
    expect(readings).toEqual([
      mockedReadings[1],
      mockedReadings[2],
      mockedReadings[0],
    ]);
  });
});

describe('getLatestReadings selector', () => {
  it(`should return latest readings limited to ${MAX_READINGS_SHOWN}`, () => {
    const mockedReadings = [];
    for (let i = 0; i < 2 * MAX_READINGS_SHOWN; ++i) {
      mockedReadings.push({
        id: `reading-${i}`,
        cough: true,
        feverInLast5Days: true,
        temperature: 38,
        isFlu: true,
        createdAt: 1111111 + i,
      });
    }

    const state = {
      readings: mockedReadings,
    };

    const readings = getLatestReadings(state);
    expect(readings).toHaveLength(MAX_READINGS_SHOWN);
  });
});

describe('getTemperature selector', () => {
  it('should return the temperature from the last reading', () => {
    const mockedReading = {
      cough: false,
      feverInLast5Days: true,
      temperature: 36,
    };

    const state = {
      last: mockedReading,
    };

    const temperature = getTemperature(state);
    expect(temperature).toBe(mockedReading.temperature);
  });

  it('should return an empty string if state is empty', () => {
    const state = {};
    const temperature = getTemperature(state);
    expect(temperature).toBe('');
  });
});

describe('getCough selector', () => {
  it('should return the cough from the last reading', () => {
    const mockedReading = {
      cough: false,
      feverInLast5Days: true,
      temperature: 36,
    };

    const state = {
      last: mockedReading,
    };

    const cough = getCough(state);
    expect(cough).toBe(mockedReading.cough);
  });

  it('should return false if state is empty', () => {
    const state = {};
    const cough = getCough(state);
    expect(cough).toBe(false);
  });
});

describe('getFeverInLast5Days selector', () => {
  it('should return the fever from the last reading', () => {
    const mockedReading = {
      cough: false,
      feverInLast5Days: true,
      temperature: 36,
    };

    const state = {
      last: mockedReading,
    };

    const feverInLast5Days = getFeverInLast5Days(state);
    expect(feverInLast5Days).toBe(mockedReading.feverInLast5Days);
  });

  it('should return false if state is empty', () => {
    const state = {};
    const feverInLast5Days = getFeverInLast5Days(state);
    expect(feverInLast5Days).toBe(false);
  });
});

describe('getIsFlu selector', () => {
  it('should return the flu from the last reading', () => {
    const mockedReading = {
      cough: false,
      feverInLast5Days: true,
      temperature: 36,
      isFlu: true,
    };

    const state = {
      last: mockedReading,
    };

    const isFlu = getIsFlu(state);
    expect(isFlu).toBe(mockedReading.isFlu);
  });

  it('should return false if state is empty', () => {
    const state = {};
    const isFlu = getIsFlu(state);
    expect(isFlu).toBe(false);
  });
});
