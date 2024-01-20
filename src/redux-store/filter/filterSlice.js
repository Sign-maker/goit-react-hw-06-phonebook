import { createSlice } from '@reduxjs/toolkit';

const initialState = { filterQuery: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filterQuery = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
