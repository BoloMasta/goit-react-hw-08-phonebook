import { ContactForm } from '../components/ContactForm/ContactForm';
import { StatusBar } from '../components/StatusBar/StatusBar';
import { ContactList } from '../components/ContactList/ContactList';
// import { Notification } from './Notification/Notification';

const Contacts = () => {
  return (
    <>
      <ContactForm />
      <StatusBar />
      <ContactList />
    </>
  );
};

export default Contacts;
