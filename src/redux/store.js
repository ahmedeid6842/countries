import { configureStore } from '@reduxjs/toolkit';
import countries from './countries-slice';

const store = configureStore({
  reducer: { countries },
});

export default store;
