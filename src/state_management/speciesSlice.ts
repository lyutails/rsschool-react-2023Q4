import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiResponseRace } from '../api/api';

export interface SpeciesState {
  value: ApiResponseRace[];
}

const initialState: SpeciesState = {
  value: [],
};

export const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {
    getSpecies: (state, action: PayloadAction<ApiResponseRace[]>) => {
      state.value = action.payload;
    },
  },
});

export const { getSpecies } = speciesSlice.actions;

export default speciesSlice.reducer;
