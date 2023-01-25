// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setContatsFilter } from './actions';

const contactsInitialState = [
  { id: '0', name: 'John', number: '1111111111' },
  { id: '1', name: 'Bob', number: '2222222222' },
  { id: '2', name: 'Mary', number: '3333333333' },
  { id: '3', name: 'Kate', number: '4444444444' },
  { id: '4', name: 'Ann', number: '5555555555' },
];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

// export const contactsReducer = (
//   state = contactsInitialState.contacts,
//   action
// ) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

const filterInitialState = {
  value: '',
};

export const filterReducer = createReducer(filterInitialState, {
  [setContatsFilter]: (state, action) => {
    state.value = action.payload;
  },
});

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case setContatsFilter.type: {
//       return {
//         ...state,
//         value: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: contactReducer,
//   filter: filterReducer,
// });
