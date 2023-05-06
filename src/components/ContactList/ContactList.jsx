import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Btn, Text } from './ContactList.styled';
import { contactsReducer } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDeleteContact = id => {
    dispatch(contactsReducer(id));
  };

  return (
    <List>
      {filterContacts.map(contact => {
        return (
          <Item key={nanoid()}>
            <Text>
              {contact.name}: {contact.number}
            </Text>
            <Btn
              type="button"
              onClick={() => {
                handleDeleteContact(contact.id);
              }}
            >
              delete
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};
