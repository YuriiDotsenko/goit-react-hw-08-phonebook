import Contacts from './../components/Contacts';
import Form from './../components/Form';
import Section from './../components/Section';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsOperations, contactsSelectors } from './../redux/contacts';

const ContactsPage = () => {
  const items = useSelector(contactsSelectors.getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Phonebok">
      <Form />
      {items.length > 0 && <Contacts title="Contacts" />}
    </Section>
  );
};

export default ContactsPage;
