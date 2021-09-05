import { getContacts, addContact, removeContact } from '../../services/api';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  removeContactsError,
  removeContactsRequest,
  removeContactsSuccess,
} from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const data = await getContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.response.status));
  }
};

export const addContactOperation = data => async dispatch => {
  dispatch(addContactRequest());

  try {
    const user = await addContact(data);
    dispatch(addContactSuccess(user));
  } catch (error) {
    dispatch(addContactError(error.response.status));
  }
};

export const removeContactOperation = idToRemove => async dispatch => {
  dispatch(removeContactsRequest());

  try {
    await removeContact(idToRemove);
    dispatch(removeContactsSuccess(idToRemove));
  } catch (error) {
    dispatch(removeContactsError(error.response.status));
  }
};
