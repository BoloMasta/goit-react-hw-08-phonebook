import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

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
      contact => contact.phone === event.target.elements.phone.value
    );

    if (isContactExist) {
      alert(`${event.target.elements.name.value} is already in contacts`);
      return;
    }
    if (isPhoneExist) {
      alert(`${event.target.elements.phone.value} is already in contacts`);
      return;
    }

    dispatch(
      addContact({
        name: event.target.elements.name.value,
        phone: event.target.elements.phone.value,
      })
    );

    // console.log(event.target.elements.name.value, event.target.elements.number.value);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          maxLength={15}
          required
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
