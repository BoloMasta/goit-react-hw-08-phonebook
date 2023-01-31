import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../redux/operations';
import { fetchContacts } from '../redux/operations';
import { selectContacts } from 'redux/selectors';
import { Header } from './Header/Header';
import { ContactForm } from './ContactForm/ContactForm';
import { StatusBar } from './StatusBar/StatusBar';
import { ContactList } from './ContactList/ContactList';

const App = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   dispatch(addContact(form.elements.name.value, form.elements.number.value));
  //   form.reset();
  // };

  return (
    <>
      <Header />
      <ContactForm />
      <StatusBar />
      {error && <p>{error}</p>}
      {isLoading && <p>Loading tasks...</p>}
      {items?.length > 0 && <ContactList />}
      <ContactList />
    </>
  );
};

export default App;
