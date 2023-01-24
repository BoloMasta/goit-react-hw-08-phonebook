import { combineReducers } from 'redux';

const contactsInitialState = {
  contacts: [
    { id: '0', name: 'John', number: '1111111111' },
    { id: '1', name: 'Bob', number: '2222222222' },
    { id: '2', name: 'Mary', number: '3333333333' },
    { id: '3', name: 'Kate', number: '4444444444' },
    { id: '4', name: 'Ann', number: '5555555555' },
  ],
};

const contactReducer = (state = contactsInitialState.contacts, action) => {
  switch (action.type) {
    case 'contacts/addTask':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filterInitialState = {
  value: '',
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filters/setContatsFilter': {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
