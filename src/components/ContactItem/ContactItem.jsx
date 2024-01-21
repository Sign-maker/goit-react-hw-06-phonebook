import { Button, ContactInfo, Item } from './ContactItem.styled';
import { useContacts } from 'hooks/useContacts';

export const ContactItem = ({ id, name, number }) => {
  const { delContact } = useContacts();

  return (
    <Item>
      <ContactInfo>
        <span>{name}</span>
        <span>{number}</span>
      </ContactInfo>
      <Button type="button" onClick={() => delContact(id)}>
        Delete
      </Button>
    </Item>
  );
};
