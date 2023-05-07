import { useState } from 'react';
import { Label, Form, Input, Button } from './ContactForm.styled.js';
import { addContacts } from 'redux/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors.jsx';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleNameChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmitBtn = (value, { resetForm }) => {
    let isDuplicate = true;

    contacts.map(
      item =>
        (isDuplicate = !item.name
          .toLocaleLowerCase()
          .includes(value.name.toLocaleLowerCase()))
    );
    if (isDuplicate) {
      const contact = { name: value.name, phone: value.number };
      dispatch(addContacts(contact));
      resetForm();
    } else {
      Notify.info(`${value.name} is already in contacts`);
    }
  };

  return (
    <Form onSubmit={handleSubmitBtn}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleNameChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contacts</Button>
    </Form>
  );
};
