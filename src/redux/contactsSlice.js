import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: '0', name: 'John', number: '1111111111' },
  { id: '1', name: 'Bob', number: '2222222222' },
  { id: '2', name: 'Mary', number: '3333333333' },
  { id: '3', name: 'Kate', number: '4444444444' },
  { id: '4', name: 'Ann', number: '5555555555' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },

      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },

    deleteAllContacts: (state, action) => {
      state.splice(0, state.length);
    },
  },
});

export const { addContact, deleteContact, deleteAllContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
