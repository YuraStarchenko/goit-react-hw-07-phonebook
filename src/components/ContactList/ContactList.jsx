import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { List, Item, Btn, Text } from './ContactList.styled';
import { deleteContacts, fetchContacts } from 'redux/operations';
import { selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const filter = useSelector(selectFilter) || '';
  const { data } = fetchContacts();
  const handleDeleteContact = id => {
    deleteContacts(id);
  };

  if (!data) {
    return;
  }

  const normalizeFilter = filter.toLocaleLowerCase();
  const filterContacts = data.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

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
