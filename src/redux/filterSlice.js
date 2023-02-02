import { createSlice } from '@reduxjs/toolkit';

const initialState = { inputValue: '', favouriteOnly: false, sortedAlphabetically: false };

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

    setFavouriteOnly: {
      reducer: state => {
        state.favouriteOnly = !state.favouriteOnly;
      },

      prepare: () => {
        return {
          payload: null,
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

export const { setContactsFilter, setFavouriteOnly, setSortedAlphabetically } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
