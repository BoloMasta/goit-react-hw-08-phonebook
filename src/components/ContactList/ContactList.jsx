import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Notification } from 'components/Notification/Notification';
import css from './ContactList.module.css';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toString().toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <>
      {contacts.length === 0 ? (
        <Notification message="No contacts yet" />
      ) : filter !== '' && filteredContacts.length === 0 ? (
        <Notification message="No contacts found" />
      ) : (
        <ul className={css.list}>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactListItem key={id} contact={{ id, name, phone }} />
          ))}
        </ul>
      )}
    </>
  );
};
