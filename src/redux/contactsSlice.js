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
    sortContactsAz: state => {
      state.items.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    },

    sortContactsAzReverse: state => {
      state.items.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    },

    sortContactsByDate: state => {
      console.log(state.items);
      state.items.sort((a, b) => {
        return a.createdAt.localeCompare(b.createdAt);
      });
    },

    sortContactsByDateReverse: state => {
      state.items.sort((a, b) => {
        return b.createdAt.localeCompare(a.createdAt);
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

export const {
  sortContactsAz,
  sortContactsAzReverse,
  sortContactsByDate,
  sortContactsByDateReverse,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
