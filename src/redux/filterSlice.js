import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { inputValue: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setContactsFilter: {
      reducer: (state, action) => {
        state.inputValue = action.payload;
      },

      prepare: inputValue => {
        return {
          payload: inputValue,
        };
      },
    },
  },
});

export const getFilter = state => state.filter.inputValue;
export const { setContactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
