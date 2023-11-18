import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import speciesReducer from './speciesSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    species: speciesReducer,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
