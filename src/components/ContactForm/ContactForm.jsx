import { useDispatch, useSelector } from 'react-redux';
import { useState, useId } from 'react';
import { selectContacts } from 'redux-store/contacts/contactsSelectors';
import { addContact } from 'redux-store/contacts/contactsSlice';
import { setFilter } from 'redux-store/filter/filterSlice';

import { Button, Form, Input, Label } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInputId = useId();
  const telInputId = useId();

  const inputHandler = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value.trimStart());
        break;
      case 'number':
        setNumber(value.trimStart());
        break;
      default:
        return;
    }
  };

  const isInContacts = newName => {
    const newNameToLowerCase = newName.toLowerCase();

    return contacts.some(
      ({ name }) => name.toLowerCase() === newNameToLowerCase
    );
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const contactData = { name: name.trimEnd(), number: number.trimEnd() };
    const newName = contactData.name;

    if (isInContacts(newName)) {
      return alert(`${newName} is in contacts!`);
    }

    dispatch(addContact(contactData));
    dispatch(setFilter(''));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        id={nameInputId}
        placeholder="Vasyl Pupkin"
        type="text"
        name="name"
        value={name}
        onChange={inputHandler}
        required
      />
      <Label htmlFor={telInputId}>Number</Label>
      <Input
        id={telInputId}
        placeholder="999111999"
        type="tel"
        name="number"
        value={number}
        onChange={inputHandler}
        required
      />
      <Button type="submit" disabled={!(name && number)}>
        Add contact
      </Button>
    </Form>
  );
};
