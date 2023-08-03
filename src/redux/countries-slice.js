import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const filteredData = response.data.filter((country) => country.name.common !== 'Israel');
  const palestineData = [{
    flags: {
      png: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Flag_of_Palestine.png',
    },
    name: {
      common: 'Palestine',
      official: 'State of Palestine',
    },
    region: 'Asia',
    capital: ['Ramallah'],
    area: 27.009,
    population: 5052776,
    timezones: ['UTC+02:00'],
    currencies: {
      ILS: {
        name: 'Jordanian dinar',
        symbol: 'JD',
      },
    },
    languages: {
      ara: 'Arabic',
    },
  }];
  const data = [...palestineData, ...filteredData];
  return data;
});

export const getCountry = createAsyncThunk('countries/getCountry', async (name) => {
  if (name === 'Israel') {
    return null;
  } if (name === 'Palestine') {
    const palestineData = {
      flags: {
        png: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Flag_of_Palestine.png',
      },
      name: {
        common: 'Palestine',
        official: 'State of Palestine',
      },
      region: 'Asia',
      capital: ['Ramallah'],
      area: 27.009,
      population: 5052776,
      timezones: ['UTC+02:00'],
      currencies: {
        ILS: {
          name: 'Jordanian dinar',
          symbol: 'JD',
        },
      },
      languages: {
        ara: 'Arabic',
      },
    };
    return palestineData;
  }
  const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return response.data[0];
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    country: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getCountries.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        countries: action.payload,
      }))
      .addCase(getCountries.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(getCountry.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getCountry.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        country: action.payload,
      }))
      .addCase(getCountry.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default countriesSlice.reducer;
