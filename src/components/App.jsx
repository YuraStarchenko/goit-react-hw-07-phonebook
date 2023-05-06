import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from '../GlobalStyle';
import { Container, Text, Title, TitleText, Book } from './Container.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

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
      </Book>
      <GlobalStyle />
    </Container>
  );
};
