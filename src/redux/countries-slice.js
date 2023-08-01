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
