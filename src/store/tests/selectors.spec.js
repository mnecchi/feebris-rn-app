import {getReadings} from '../selectors';

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
