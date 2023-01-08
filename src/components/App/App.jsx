import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ContactsForm,
  ContactsList,
  ContactsFilter,
  AppContainer,
  addContact,
  deleteContact,
  getContacts,
  filterContacts,
  getFilterValue,
} from 'index';
//

export const App = () => {
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const formSubmitHandler = ({ name, number }) => {
    const normalizedNameValue = name.toLowerCase();
    const normalizedNamesArr = contacts.map(contact =>
      contact.name.toLowerCase()
    );

    if (normalizedNamesArr.includes(normalizedNameValue)) {
      alert(`${name} is already in the list`);
      return false;
    } else {
      dispatch(addContact({ name, number }));
      return true;
    }
  };

  const inputHandler = evt => {
    const { value } = evt.currentTarget;

    dispatch(filterContacts(value));
  };

  const getFilteredContacts = () => {
    const normalizedFilterValue = contactsFilter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <AppContainer>
      <h2>Phonebook</h2>
      <ContactsForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <ContactsFilter inputHandler={inputHandler} />
      <ContactsList contacts={filteredContacts} onDelete={onDelete} />
    </AppContainer>
  );
};
