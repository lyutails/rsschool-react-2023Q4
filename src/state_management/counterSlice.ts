import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    totalSpeciesFound: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { totalSpeciesFound } = counterSlice.actions;

export default counterSlice.reducer;
