import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, toogleFavourite } from './operations';

const initialState = [];

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: initialState, isLoading: false, error: null },
  reducers: {
    sortContacts: state => {
      state.items.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    },

    sortContactsReverse: state => {
      state.items.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    },
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    [toogleFavourite.pending]: handlePending,
    [toogleFavourite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(index, 1, action.payload);
    },
    [toogleFavourite.rejected]: handleRejected,
  },
});

// const index = state.items.findIndex(task => task.id === action.payload.id);
// state.items.splice(index, 1, action.payload);

export const { sortContacts, sortContactsReverse } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
