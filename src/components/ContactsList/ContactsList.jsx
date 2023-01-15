import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, getContacts, getFilterValue } from 'index';
///////////////////////

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilterValue = contactsFilter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <List>
        {filteredContacts.map(({ name, number, id }) => {
          return <ListItem name={name} number={number} id={id} key={id} />;
        })}
      </List>
    </>
  );
};
