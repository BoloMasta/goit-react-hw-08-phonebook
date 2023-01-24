import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addTask',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setContatsFilter = value => {
  return {
    type: 'filters/setContatsFilter',
    payload: value,
  };
};
