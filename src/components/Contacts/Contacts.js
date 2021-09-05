import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import ContactsList from '../ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, actions } from './../../redux/contacts';

const Contacts = ({ title }) => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(actions.setUpFilter(event.currentTarget.value));
  };

  return (
    <>
      <h2 className="Title">{title}</h2>
      <Input
        style={{ width: '45%' }}
        label="Find contacts by name"
        type="text"
        name="filter"
        value={filter}
        handleInputChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      <ContactsList />
    </>
  );
};

Contacts.defaultProps = {
  title: '',
};
Contacts.propTypes = {
  title: PropTypes.string,
};

export default Contacts;
