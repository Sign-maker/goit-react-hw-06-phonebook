import { nanoid } from 'nanoid';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { useState, useRef } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { current: nameInputId } = useRef(nanoid());
  const { current: telInputId } = useRef(nanoid());

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

  const onSubmitHandler = event => {
    event.preventDefault();
    onSubmit({ name: name.trimEnd(), number: number.trimEnd() });
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
