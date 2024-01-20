import { useSelector } from 'react-redux';
import { selectFilter } from 'redux-store/filter/filterSelectors';
import { selectContacts } from 'redux-store/contacts/contactsSelectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { Info } from 'components/Info/Info.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterQuery = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const filterToLowercase = filterQuery.toLowerCase();

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
