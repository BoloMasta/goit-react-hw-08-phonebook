import { ContactForm } from 'components/ContactForm/ContactForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const ContactEdit = contact => {
  console.log(contact);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" component="h1">
        Type new data for this contact
      </Typography>
      <Typography variant="h5" component="h2">
        {contact.contact.name}: {contact.contact.number}
      </Typography>
      <ContactForm />
    </Box>
  );
};
