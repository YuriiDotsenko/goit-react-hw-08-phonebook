import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items.entities;
const getFilter = state => state.contacts.filter;
const getError = state => state.contacts.items.error;

const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getItems,
  getFilter,
  getError,
  getFilteredContacts,
};

export default contactsSelectors;
