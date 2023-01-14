import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, getContacts, getFilterValue } from 'index';
import PropTypes from 'prop-types';

export const ContactsList = ({ onDelete }) => {
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
          return (
            <ListItem
              name={name}
              number={number}
              onDelete={onDelete}
              id={id}
              key={id}
            />
          );
        })}
      </List>
    </>
  );
};

ContactsList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
