import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from '../GlobalStyle';
import { Container, Text, Title, TitleText, Book } from './Container.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Container>
      <Book>
        <TitleText>Phonebook</TitleText>
        <ContactForm />
        <Title>Contacts</Title>
        <Text>find contact by name</Text>
        <Filter />
        <ContactList />
        {isLoading && !error && <b>Request in progress...</b>}
      </Book>
      <GlobalStyle />
    </Container>
  );
};
