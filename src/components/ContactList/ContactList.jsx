import { useContacts } from 'hooks/useContacts';
import { useFilter } from 'hooks/useFilter';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { Info } from 'components/Info/Info.styled';

export const ContactList = () => {
  const { contacts } = useContacts();
  const { filterValue } = useFilter();

  const getFilteredContacts = () => {
    const filterToLowercase = filterValue.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowercase)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <Info>There are no contacts</Info>
      )}
    </List>
  );
};
