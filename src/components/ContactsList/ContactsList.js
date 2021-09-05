import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ContactsList.css';
import { contactsSelectors, contactsOperations } from './../../redux/contacts';
import styled from 'styled-components';

const ContactsList = () => {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className="List">
      {filteredContacts.map(({ name, id, number }) => (
        <li key={id} className="Contact">
          <ContactBox className="Text">
            <p className="Name">{name}</p>
            <p className="Phone">{number}</p>
          </ContactBox>
          <button
            className="removeBtn"
            type="button"
            onClick={() =>
              dispatch(contactsOperations.removeContactOperation(id))
            }
          >
            Remove contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

const ContactBox = styled.div``;
