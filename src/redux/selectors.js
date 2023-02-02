import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.inputValue;

export const selectFavouriteOnly = state => state.filter.favouriteOnly;

export const selectSortedAlphabetically = state => state.filter.sortedAlphabetically;

export const selectContactsCount = createSelector([selectContacts], contacts => {
  console.log('selectContactsCount. Now memoized!');
  return contacts.reduce(
    (count, contact) => {
      if (contact.favourite) {
        count.favourite++;
      }
      count.total++;
      return count;
    },
    { total: 0, favourite: 0 }
  );
});

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFavouriteOnly],
  (contacts, favouriteOnly) => {
    console.log('selectVisibleContacts. Now memoized!');
    return favouriteOnly ? contacts.filter(contact => contact.favourite) : contacts;
  }
);

export const selectFilteredContacts = createSelector(
  [selectVisibleContacts, selectFilter],
  (contacts, filter) => {
    console.log('selectFilteredContacts. Now memoized!');
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);
