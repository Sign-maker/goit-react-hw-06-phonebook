import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container/Container.styled';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title.styled';
import { Subtitle } from './Subtitle/Subtitle.styled';
import { useState } from 'react';
import initialContacts from '../datajson/initContacts.json';
import { useLocalStorage } from 'utils/useLocalStorage';

const CONTACT_LS = 'contact-storage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(CONTACT_LS, initialContacts);
  const [filterQuery, setFilterQuery] = useState('');

  const addContact = contactData => {
    const { name: newName } = contactData;

    if (isInContacts(newName)) {
      return alert(`${newName} is in contacts!`);
    }
    const contact = { id: nanoid(), ...contactData };
    setContacts(state => [contact, ...state]);
  };

  const isInContacts = newName => {
    const newNameToLowerCase = newName.toLowerCase();

    return contacts.some(
      ({ name }) => name.toLowerCase() === newNameToLowerCase
    );
  };

  const onFilterChange = query => setFilterQuery(query);

  const getFilteredContacts = () => {
    const filterToLowercase = filterQuery.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowercase)
    );
  };

  const onItemDelete = delId =>
    setContacts(state => state.filter(({ id }) => id !== delId));

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filterQuery} onFilterChange={onFilterChange} />
      <ContactList contacts={filteredContacts} onItemDelete={onItemDelete} />
    </Container>
  );
};
