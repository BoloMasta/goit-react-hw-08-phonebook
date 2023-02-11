import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsCount } from '../../redux/contacts/selectors';
import { sortContactsAz, sortContactsAzReverse } from '../../redux/contacts/contactsSlice';
import { Filter } from '../Filter/Filter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export const StatusBar = () => {
  const [sorted, setSorted] = useState({ sortedAlphabetically: false, sortedByDate: false });
  const dispatch = useDispatch();
  const { total } = useSelector(selectContactsCount);

  const handleSortAzContacts = () => {
    if (sorted.sortedAlphabetically) {
      dispatch(sortContactsAzReverse());
      setSorted({ sortedAlphabetically: false, sortedByDate: false });
    } else {
      dispatch(sortContactsAz());
      setSorted({ sortedAlphabetically: true, sortedByDate: false });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px',
        backgroundColor: 'var(--background)',
        borderRadius: '10px',
        width: 400,
        margin: '0 auto 10px auto',
        border: '1px solid black',
        transition: 'all .3s ease-in-out',

        '&:hover': {
          backgroundColor: 'var(--background-hover)',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        },
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', cursor: 'default' }}
        title="number of your contacts"
      >
        <PersonIcon sx={{ marginRight: 1 }} />
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {total}
        </Typography>
      </Box>
      <Filter />
      <IconButton
        onClick={handleSortAzContacts}
        title={sorted.sortedAlphabetically ? 'Sort by name Z-A' : 'Sort by name A-Z'}
      >
        <SortByAlphaIcon size="large" sx={{ height: 30, width: 30 }} />
      </IconButton>
    </Box>
  );
};
