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
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handlePhoneChange = newPhone => {
    setPhone(newPhone);
  };

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
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );

    form.reset();
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="standard"
        name="name"
        fullWidth
        margin="normal"
        placeholder="Enter name"
        required
        inputProps={{ maxLength: 30 }}
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
        error={phone.length > 0 && matchIsValidTel(phone) === false}
        inputProps={{ maxLength: 20 }}
      />

      <Button
        variant="contained"
        endIcon={<AddCircleOutlineIcon />}
        className={css.submitButton}
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};
