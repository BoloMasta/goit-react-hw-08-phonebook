import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { inputValue: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setContatsFilter: {
      reducer: (state, action) => {
        state.filter = action.payload;
      },

      prepare: inputValue => {
        return {
          payload: inputValue,
        };
      },
    },
  },
});

export const { setContatsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
