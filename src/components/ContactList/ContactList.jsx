import { useSelector } from 'react-redux';
// import { FadeLoader } from 'react-spinners';

import List from '@mui/material/List';
import CircularProgress from '@mui/material/CircularProgress';

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

  return (
    <List className={css.list}>
      {isLoading && (
        // <FadeLoader
        //   color="#3f51b5"
        //   cssOverride={{
        //     position: 'absolute',
        //     top: '50%',
        //     left: '50%',
        //     height: 20,
        //     width: 0,
        //     transform: 'translate(-50%, -50%)',
        //   }}
        // />

        <CircularProgress
          sx={{
            position: 'absolute',
            top: '35%',
            left: '45%',
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
