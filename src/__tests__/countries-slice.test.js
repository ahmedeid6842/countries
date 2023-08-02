import countriesReducer from '../redux/countries-slice';

jest.mock('axios');

const mockCountries = [
  {
    name: {
      common: 'United States',
    },
    capital: ['Washington D.C.'],
  },
  {
    name: {
      common: 'Canada',
    },
    capital: ['Ottawa'],
  },
];

const mockCountry = {
  name: {
    common: 'United States',
  },
  capital: ['Washington D.C.'],
};

describe('countriesSlice', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(countriesReducer(undefined, {})).toEqual({
        countries: [],
        country: null,
        status: 'idle',
        error: null,
      });
    });

    it('should handle getCountries.pending', () => {
      expect(
        countriesReducer(undefined, {
          type: 'countries/getCountries/pending',
        }),
      ).toEqual({
        countries: [],
        country: null,
        status: 'loading',
        error: null,
      });
    });

    it('should handle getCountries.fulfilled', () => {
      expect(
        countriesReducer(undefined, {
          type: 'countries/getCountries/fulfilled',
          payload: mockCountries,
        }),
      ).toEqual({
        countries: mockCountries,
        country: null,
        status: 'succeeded',
        error: null,
      });
    });

    it('should handle getCountries.rejected', () => {
      expect(
        countriesReducer(undefined, {
          type: 'countries/getCountries/rejected',
          error: { message: 'Error message' },
        }),
      ).toEqual({
        countries: [],
        country: null,
        status: 'failed',
        error: 'Error message',
      });
    });

    it('should handle getCountry.pending', () => {
      expect(
        countriesReducer(undefined, {
          type: 'countries/getCountry/pending',
          meta: { arg: 'United States' },
        }),
      ).toEqual({
        countries: [],
        country: null,
        status: 'loading',
        error: null,
      });
    });

    it('should handle getCountry.fulfilled', () => {
      expect(
        countriesReducer(undefined, {
          type: 'countries/getCountry/fulfilled',
          payload: mockCountry,
        }),
      ).toEqual({
        countries: [],
        country: mockCountry,
        status: 'succeeded',
        error: null,
      });
    });

    it('should handle getCountry.rejected', () => {
      expect(
        countriesReducer(undefined, {
          type: 'countries/getCountry/rejected',
          error: { message: 'Error message' },
        }),
      ).toEqual({
        countries: [],
        country: null,
        status: 'failed',
        error: 'Error message',
      });
    });
  });
});
