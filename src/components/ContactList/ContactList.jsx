import { useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';

import {
  selectIsLoading,
  selectFilteredContacts,
  selectFilter,
  selectContactsCount,
} from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Notification } from 'components/Notification/Notification';
import css from './ContactList.module.scss';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contactsCount = useSelector(selectContactsCount);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {contactsCount === 0 ? (
        <Notification message="No contacts yet" />
      ) : filter !== '' && filteredContacts.length === 0 ? (
        <Notification message="No contacts found" />
      ) : (
        <>
          <ul className={css.list}>
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
            {filteredContacts.map(({ id, name, phone, favourite }) => (
              <ContactListItem key={id} contact={{ id, name, phone, favourite }} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};
