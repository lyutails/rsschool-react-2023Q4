import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import speciesReducer from './speciesSlice';
import searchSlice from './searchSlice';
import { speciesApi } from '../api/api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    species: speciesReducer,
    search: searchSlice,
    [speciesApi.reducerPath]: speciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(speciesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
