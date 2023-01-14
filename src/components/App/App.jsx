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
} from 'index';
//

export const App = () => {
  const contacts = useSelector(getContacts);
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

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <AppContainer>
      <h2>Phonebook</h2>
      <ContactsForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <ContactsFilter inputHandler={inputHandler} />
      <ContactsList onDelete={onDelete} />
    </AppContainer>
  );
};
