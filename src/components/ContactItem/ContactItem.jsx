import { useDispatch } from 'react-redux';
import { delContact } from 'redux-store/contacts/contactsSlice';
import { Button, ContactInfo, Item } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onItemDelete = () => dispatch(delContact(id));

  return (
    <Item>
      <ContactInfo>
        <span>{name}</span>
        <span>{number}</span>
      </ContactInfo>
      <Button type="button" onClick={onItemDelete}>
        Delete
      </Button>
    </Item>
  );
};
