import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { StatusBar } from '../components/StatusBar/StatusBar';
import { ContactList } from '../components/ContactList/ContactList';
// import { Notification } from './Notification/Notification';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <StatusBar />
      <ContactList />
    </>
  );
};

export default Contacts;
