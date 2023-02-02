import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.inputValue;

export const selectFavouriteOnly = state => state.filter.favouriteOnly;

export const selectSortedAlphabetically = state => state.filter.sortedAlphabetically;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFavouriteOnly],
  (contacts, favouriteOnly) => {
    return favouriteOnly ? contacts.filter(contact => contact.favourite) : contacts;
  }
);

export const selectFilteredContacts = createSelector(
  [selectVisibleContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);

export const selectContactsCount = createSelector([selectContacts], contacts => contacts.length);
