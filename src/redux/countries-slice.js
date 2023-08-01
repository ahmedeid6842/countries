import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  console.log('here its the ', response.data);
  return response.data;
});

export const getCountry = createAsyncThunk('countries/getCountry', async (name) => {
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
