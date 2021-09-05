import { createAction } from '@reduxjs/toolkit';

const setUpFilter = { setUpFilter: createAction('phonebook/filter') };
export default setUpFilter;

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const removeContactsRequest = createAction(
  'contacts/removeContactRequest',
);
export const removeContactsSuccess = createAction(
  'contacts/removeContactSuccess',
);
export const removeContactsError = createAction('contacts/removeContactError');
