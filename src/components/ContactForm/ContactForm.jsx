import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleNameChange = newName => {
    setName(newName);
  };

  const handlePhoneChange = newPhone => {
    setPhone(newPhone);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isPhoneExist = contacts.find(
      contact => contact.number.replace(/[^0-9]+/g, '') === phone.replace(/[^0-9]+/g, '')
    );
    if (isContactExist) {
      alert(`User ${name} is already in contacts`);
      return;
    }
    if (isPhoneExist) {
      alert(`Number ${phone} is already in contacts`);
      return;
    }

    dispatch(
      addContact({
        name,
        number: phone,
      })
    );

    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="standard"
        name="name"
        fullWidth
        placeholder="Enter name"
        required
        inputProps={{ maxLength: 30 }}
        value={name}
        onChange={event => handleNameChange(event.target.value)}
      />
      <BackspaceIcon
        className={css.backspaceIconName}
        onClick={() => setName('')}
        style={{ display: name.length > 0 ? 'block' : 'none' }}
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
      <BackspaceIcon
        className={css.backspaceIconPhone}
        onClick={() => setPhone('')}
        style={{ display: phone.length > 0 ? 'block' : 'none' }}
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
