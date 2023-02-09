import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.scss';
import TextField from '@mui/material/TextField';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === event.target.elements.name.value.toLowerCase()
    );
    const isPhoneExist = contacts.find(
      contact => contact.number === event.target.elements.number.value
    );

    if (isContactExist) {
      alert(`User ${event.target.elements.name.value} is already in contacts`);
      return;
    }
    if (isPhoneExist) {
      alert(`Number ${event.target.elements.number.value} is already in contacts`);
      return;
    }

    dispatch(
      addContact({
        name: event.target.elements.name.value,
        number: event.target.elements.number.value,
      })
    );

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputs}>
        <TextField label="Name" variant="standard" />
        <TextField label="Phone" variant="standard" />
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            maxLength={15}
            required
          />
        </label>
      </div>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
