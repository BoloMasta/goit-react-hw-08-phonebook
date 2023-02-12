import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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

    // if (!matchIsValidTel(event.target.elements.number.value)) {
    //   alert(`Number ${event.target.elements.number.value} is not valid`);
    //   return;
    // }

    dispatch(
      addContact({
        name: event.target.elements.name.value,
        number: event.target.elements.number.value,
      })
    );

    form.reset();
    setPhone('');
  };

  const [phone, setPhone] = useState('');
  const handlePhoneChange = newPhone => {
    const limit = 15;
    if (newPhone.length > limit) return;
    setPhone(newPhone);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="standard"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        fullWidth
        margin="normal"
        placeholder="Enter name"
        required
      />
      <MuiTelInput
        label="Phone"
        variant="standard"
        name="number"
        fullWidth
        margin="normal"
        placeholder="Enter phone number"
        required
        value={phone}
        onChange={handlePhoneChange}
        error={matchIsValidTel(phone) === false}
      />

      <Button
        variant="contained"
        endIcon={<AddCircleOutlineIcon />}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px auto 0 auto',
        }}
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};
