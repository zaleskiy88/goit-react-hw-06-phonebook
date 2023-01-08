import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormContainer, Button, Form, Label, Input } from 'index';

export const ContactsForm = ({ onSubmit }) => {
  const [state, setState] = useState({ name: '', number: '' });

  const inputHandler = evt => {
    const { name, value } = evt.currentTarget;

    setState(prev => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = evt => {
    evt.preventDefault();

    onSubmit(state)
      ? setState({ name: '', number: '' })
      : setState(prev => {
          return { name: '', number: prev.number };
        });
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const { name, number } = state;

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            value={name}
            onChange={inputHandler}
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Input
            id={numberInputId}
            value={number}
            onChange={inputHandler}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    </FormContainer>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
