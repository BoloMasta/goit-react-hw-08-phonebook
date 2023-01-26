import { createSlice, nanoid } from '@reduxjs/toolkit';

const exampleContactsList = [
  { id: '0', name: 'John', number: '11111' },
  { id: '1', name: 'Bob', number: '222 222 222' },
  { id: '2', name: 'Mary', number: '333-333-333' },
  { id: '3', name: 'Kate', number: '444_444_444' },
  { id: '4', name: 'Ann', number: '+55-555-555-555' },
  { id: '5', name: 'Joseph', number: '(66) 666-666-666' },
];

const contactsInitialState =
  localStorage.getItem('contacts') !== null
    ? JSON.parse(localStorage.getItem('contacts'))
    : exampleContactsList;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state));
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
      localStorage.setItem('contacts', JSON.stringify(state));
    },

    deleteAllContacts: (state, action) => {
      state.splice(0, state.length);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact, deleteAllContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
