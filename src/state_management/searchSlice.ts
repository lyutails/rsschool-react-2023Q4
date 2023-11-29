import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    makeSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearSearch: (state) => {
      state.value = '';
    },
  },
});

export const { makeSearch, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
