import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setContatsFilter: {
      reducer: (state, action) => {
        state.filter = action.payload;
      },

      prepare: value => {
        return {
          payload: value,
        };
      },
    },
  },
});

export const { setContatsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
