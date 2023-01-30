import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = [];
//   { id: '0', name: 'John', number: '11111' },
//   { id: '1', name: 'Bob', number: '222 222 222' },
//   { id: '2', name: 'Mary', number: '333-333-333' },
//   { id: '3', name: 'Kate', number: '444_444_444' },
//   { id: '4', name: 'Ann', number: '+55-555-555-555' },
//   { id: '5', name: 'Joseph', number: '(66) 666-666-666' },
// ];

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
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },

  //   addContact: {
  //     reducer: (state, action) => {
  //       const isContactExist = state.find(
  //         contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
  //       );
  //       if (isContactExist) {
  //         alert(`User with name ${action.payload.name} is already in contacts`);
  //         return;
  //       }
  //       const isNumberExist = state.find(
  //         contact => contact.number.replace(/\D/g, '') === action.payload.number.replace(/\D/g, '')
  //       );
  //       if (isNumberExist) {
  //         alert(`Number ${action.payload.number} is already in contacts`);
  //         return;
  //       }

  //       state.push(action.payload);
  //     },

  //     prepare: (name, number) => {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },

  //   deleteContact: (state, action) => {
  //     const index = state.findIndex(contact => contact.id === action.payload);
  //     state.splice(index, 1);
  //   },

  //   deleteAllContacts: state => {
  //     state.items.splice(0, state.items.length);
  //   },

  //   sortContacts: state => {
  //     state.items.sort((a, b) => a.name.localeCompare(b.name));
  //   },
  // },

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
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,

  deleteAllContacts,
  sortContacts,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
