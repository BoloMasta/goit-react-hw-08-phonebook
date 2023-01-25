import { createAction, nanoid } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const setContatsFilter = createAction('filters/setContatsFilter');

// export const addContact = (name, number) => {
//   return {
//     type: 'contacts/addTask',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

// export const setContatsFilter = value => {
//   return {
//     type: 'filters/setContatsFilter',
//     payload: value,
//   };
// };
