import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux-store/contacts/contactsSelectors';
import * as actions from 'redux-store/contacts/contactsSlice';

export const useContacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const addContact = contact => dispatch(actions.addContact(contact));
  const delContact = id => dispatch(actions.delContact(id));

  return { contacts, addContact, delContact };
};
