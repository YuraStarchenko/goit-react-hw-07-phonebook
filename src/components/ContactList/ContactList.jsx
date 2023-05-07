import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Btn, Text } from './ContactList.styled';
import { deleteContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
	const filter = useSelector(selectFilter);
	
  const filterContacts = contacts.filter(el =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <List>
      {filterContacts.map(contact => {
        return (
          <Item key={contact.id}>
            <Text>
              {contact.name}: {contact.number}
            </Text>
            <Btn
              type="button"
              onClick={() => {
                dispatch(deleteContacts(contact.id));
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
