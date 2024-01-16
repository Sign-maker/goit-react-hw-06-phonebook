import { Button, ContactInfo, Item } from './ContactItem.styled';

export const ContactItem = ({ name, number, onItemDelete }) => (
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
