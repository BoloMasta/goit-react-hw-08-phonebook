import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

export const ContactEdit = ({ contact, handleClose }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleNumberChange = event => {
    setNumber(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
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
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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

      <Box
        sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '20px' }}
      >
        <Button type="submit" variant="contained" color="primary">
          Save changes
          <SaveIcon sx={{ marginLeft: '15px' }} />
        </Button>

        <Button type="button" variant="contained" color="secondary" onClick={handleClose}>
          Cancel
          <CancelIcon sx={{ marginLeft: '15px' }} />
        </Button>
      </Box>
    </form>
  );
};
