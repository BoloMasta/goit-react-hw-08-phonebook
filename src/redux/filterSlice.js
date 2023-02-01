import { createSlice } from '@reduxjs/toolkit';

const initialState = { inputValue: '', sortedAlphabetically: false };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
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

    setSortedAlphabetically: {
      reducer: state => {
        state.sortedAlphabetically = !state.sortedAlphabetically;
      },

      prepare: () => {
        return {
          payload: null,
        };
      },
    },
  },
});

export const { setContactsFilter, setSortedAlphabetically } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
