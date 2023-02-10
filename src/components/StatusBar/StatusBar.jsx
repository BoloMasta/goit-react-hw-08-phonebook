import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsCount } from '../../redux/contacts/selectors';
import { sortContactsAz, sortContactsAzReverse } from '../../redux/contacts/contactsSlice';
//import { setFavouriteOnly } from '../../redux/contacts/filterSlice';
import { Filter } from '../Filter/Filter';
import css from './StatusBar.module.scss';
// import sortIcon from '../../images/sort.png';
//import sortAzIcon from '../../images/sortaz.png';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

import IconButton from '@mui/material/IconButton';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export const StatusBar = () => {
  const [sorted, setSorted] = useState({ sortedAlphabetically: false, sortedByDate: false });
  const dispatch = useDispatch();
  // const favouriteOnly = useSelector(selectFavouriteOnly);
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
    <div className={css.StatusBar}>
      <div className={css.counter}>
        <PersonIcon sx={{ marginRight: 1 }} />
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {total}
        </Typography>
      </div>

      <Filter />

      <IconButton
        onClick={handleSortAzContacts}
        title={sorted.sortedAlphabetically ? 'Sort by name Z-A' : 'Sort by name A-Z'}
      >
        <SortByAlphaIcon size="large" sx={{ height: 30, width: 30 }} />
      </IconButton>
    </div>
  );
};
