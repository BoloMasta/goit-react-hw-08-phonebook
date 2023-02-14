import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.inputValue;

export const selectSortedAlphabetically = state => state.filter.sortedAlphabetically;

export const selectContactsCount = createSelector([selectContacts], contacts => {
  return contacts.length;
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);
