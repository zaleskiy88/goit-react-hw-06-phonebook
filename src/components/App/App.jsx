import React from 'react';
import { useSelector } from 'react-redux';
import {
  ContactsForm,
  ContactsList,
  ContactsFilter,
  AppContainer,
  getContacts,
} from 'index';
///////////////

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <AppContainer>
      <h2>Phonebook</h2>
      <ContactsForm />

      <h2>Contacts</h2>
      {contacts.length > 1 && <ContactsFilter />}

      {contacts.length > 0 ? (
        <ContactsList />
      ) : (
        <p>
          Phonebook is empty (: <br />
          Please add some contacts
        </p>
      )}
    </AppContainer>
  );
};
