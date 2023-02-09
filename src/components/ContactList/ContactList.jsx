import { useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  selectIsLoading,
  selectFilteredContacts,
  selectFilter,
  selectFavouriteOnly,
  selectContactsCount,
} from 'redux/contacts/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Notification } from 'components/Notification/Notification';
import css from './ContactList.module.scss';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contactsCount = useSelector(selectContactsCount);
  const filter = useSelector(selectFilter);
  const favouriteOnly = useSelector(selectFavouriteOnly);
  const filteredContacts = useSelector(selectFilteredContacts);

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <List className={css.list}>
      {isLoading && (
        <FadeLoader
          color="#3f51b5"
          cssOverride={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            height: 20,
            width: 0,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      {!isLoading && contactsCount.total === 0 && <Notification message="No contacts yet" />}
      {filteredContacts.map(({ id, name, number, favourite }) => (
        <ContactListItem key={id} contact={{ id, name, number, favourite }} />
      ))}
      {filteredContacts.length === 0 && (filter !== '' || favouriteOnly) && (
        <Notification message="No contacts found" />
      )}
    </List>
  );
};
