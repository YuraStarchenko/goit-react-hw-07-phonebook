import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Btn, Text } from './ContactList.styled';
import { deleteContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { nanoid } from 'nanoid';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
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
