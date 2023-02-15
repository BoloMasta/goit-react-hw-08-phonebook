import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import css from './ContactEdit.module.scss';

export const ContactEdit = ({ contact, handleClose }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const contacts = useSelector(selectContacts);
  const contactsWithoutCurrent = contacts.filter(item => item.id !== contact.id);
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isContactExist = contactsWithoutCurrent.find(
      contact => contact.name.toLowerCase() === event.target.elements.name.value.toLowerCase()
    );
    const isPhoneExist = contactsWithoutCurrent.find(
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
      editContact({
        id: contact.id,
        name,
        number,
      })
    );
    handleClose();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <Typography variant="h6" component="h1">
        Type new data for this contact
      </Typography>
      <Typography variant="subtitle1" component="h2">
        {contact.name}: {contact.number}
      </Typography>
      <TextField
        label="Name"
        variant="standard"
        name="name"
        fullWidth
        margin="normal"
        value={name}
        onChange={handleNameChange}
        required
      />
      <TextField
        label="Number"
        variant="standard"
        name="number"
        fullWidth
        margin="normal"
        value={number}
        onChange={handleNumberChange}
        required
      />
      <Box className={css.buttons}>
        <Button type="submit" variant="contained" color="primary">
          Save changes
          <SaveIcon sx={{ ml: 2 }} />
        </Button>
        <Button type="button" variant="contained" color="secondary" onClick={handleClose}>
          Cancel
          <CancelIcon sx={{ ml: 2 }} />
        </Button>
      </Box>
    </form>
  );
};

ContactEdit.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  handleClose: PropTypes.func,
};
