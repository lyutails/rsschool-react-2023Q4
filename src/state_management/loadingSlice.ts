import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    getLoading: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { getLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
