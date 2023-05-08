import { Label, Form, Input, Button } from './ContactForm.styled.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors.jsx';
import { addContacts } from 'redux/operations';
import { Formik } from 'formik';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
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
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmitBtn}
      >
        <Form>
          <Label htmlFor="name">
            Name
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              id="number"
              type="tel"
              name="number"
              placeholder="Enter your number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contacts</Button>
        </Form>
      </Formik>
    </>
  );
};
